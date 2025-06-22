const { getAllLocalItems } = require('../dynamoLocalDB/localDynamo');
const { getDateRange } = require('../utils/dateUtil');

/**
 * [3번] SecondaryKey (SID_CNID_CNTY_DATE) 로만 조회
 * @param {Object} body
 * @param {String} body.sellerId
 * @param {String} body.contentId
 * @param {Array}  body.countList
 * @param {String} body.startDate
 * @param {String} body.endDate
 * @param {Array}  body.metricList
 */
const sellerRetriveQuery = async (body) => {
  const { sellerId, contentId, countList, startDate, endDate, metricList } = body;

  const items = getAllLocalItems();
  const dateList = getDateRange(startDate, endDate);

  const result = {};
  metricList.forEach((metric) => (result[metric] = Array(dateList.length).fill(0)));

  for (let d = 0; d < dateList.length; d++) {
    const date = dateList[d];

    for (const country of countList) {
      const sk = `${sellerId}_${contentId}_${country}_${date}`;

      const match = items.find((item) => item.SID_CNID_CNTY_DATE === sk);

      if (match) {
        metricList.forEach((metric) => {
          result[metric][d] += match[metric] || 0;
        });
      }
    }
  }

  console.log('[✅ sellerRetriveQuery] SecondaryKey로 날짜별 조회:', result);
  return result;
};

module.exports = { sellerRetriveQuery };
