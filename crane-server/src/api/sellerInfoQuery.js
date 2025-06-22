const { getAllLocalItems } = require('../dynamoLocalDB/localDynamo');
const { getDateRange } = require('../utils/dateUtil');

/**
 * [1번] PartitionKey (SID_CNID_CNTY_PDCD_DATE) 로만 조회하는 API
 * @param {Object} body
 * @param {String} body.partitionKey
 * @param {String} body.startDate
 * @param {String} body.endDate
 * @param {Array}  body.metricList
 */
const sellerInfoQuery = async (body) => {
  const { partitionKey, startDate, endDate, metricList } = body;

  const items = getAllLocalItems();
  const dateList = getDateRange(startDate, endDate);

  // 결과 초기화
  const result = {};
  metricList.forEach(metric => result[metric] = []);

  for (const date of dateList) {
    const pk = `${partitionKey}_${date}`;
    const dayItem = items.find(i => i.SID_CNID_CNTY_PDCD_DATE === pk);

    metricList.forEach(metric => {
      result[metric].push(dayItem?.[metric] ?? 0);
    });
  }

  console.log('[✅ sellerInfoQuery] 날짜별 데이터:', result);
  return result;
};

module.exports = { sellerInfoQuery };
