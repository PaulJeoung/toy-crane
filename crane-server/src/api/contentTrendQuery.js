const { getAllLocalItems } = require('../dynamoLocalDB/localDynamo');
const { getDateRange } = require('../utils/dateUtil');

/**
 * [5번] GSI + SecondaryKey 조합으로 조회
 * @param {Object} body
 * @param {String} body.sellerId
 * @param {String} body.contentId
 * @param {Array}  body.countList
 * @param {String} body.paidCode
 * @param {String} body.startDate
 * @param {String} body.endDate
 * @param {Array}  body.metricList
 */
const contentTrendQuery = async (body) => {
  const { sellerId, contentId, countList, paidCode, startDate, endDate, metricList } = body;

  const items = getAllLocalItems();
  const dateList = getDateRange(startDate, endDate);

  const result = {};
  metricList.forEach((metric) => (result[metric] = Array(dateList.length).fill(0)));

  for (let d = 0; d < dateList.length; d++) {
    const date = dateList[d];

    for (const country of countList) {
      const gsiKey = `${contentId}_${country}_${paidCode}`;
      const secondaryKey = `${sellerId}_${contentId}_${country}_${date}`;

      const match = items.find(
        (item) =>
          item.CNID_CNTY_PDCD === gsiKey &&
          item.SID_CNID_CNTY_DATE === secondaryKey &&
          item.date === date
      );

      if (match) {
        metricList.forEach((metric) => {
          result[metric][d] += match[metric] || 0;
        });
      }
    }
  }

  console.log('[✅ contentTrendQuery] GSI + SecondaryKey 날짜별 조회:', result);
  return result;
};

module.exports = { contentTrendQuery };
