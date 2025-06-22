const { getAllLocalItems } = require('../dynamoLocalDB/localDynamo');
const { getDateRange } = require('../utils/dateUtil');

/**
 * [2번] GSI Partition Key (CNID_CNTY_PDCD) 로만 조회
 * @param {Object} body
 * @param {String} body.contentId
 * @param {Array}  body.countList
 * @param {String} body.paidCode
 * @param {String} body.startDate
 * @param {String} body.endDate
 * @param {Array}  body.metricList
 */
const contentRetrieveQuery = async (body) => {
  const { contentId, countList, paidCode, startDate, endDate, metricList } = body;

  const items = getAllLocalItems();
  const dateList = getDateRange(startDate, endDate);

  // 초기화
  const result = {};
  metricList.forEach((metric) => (result[metric] = Array(dateList.length).fill(0)));

  // 날짜 인덱스 기반 집계
  for (let d = 0; d < dateList.length; d++) {
    const date = dateList[d];

    for (const country of countList) {
      const gsiKey = `${contentId}_${country}_${paidCode}`;
      const match = items.find(
        (item) => item.CNID_CNTY_PDCD === gsiKey && item.date === date
      );

      if (match) {
        metricList.forEach((metric) => {
          result[metric][d] += match[metric] || 0;
        });
      }
    }
  }

  console.log('[✅ contentRetrieveQuery] GSI로 날짜별 조회:', result);
  return result;
};

module.exports = { contentRetrieveQuery };
