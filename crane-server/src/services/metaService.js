const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, QueryCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = 'sales_prereg_seller_metic';

exports.fetchMetricData = async ({ metricList, contentId, countList, startDate, endDate }) => {
  // 단순 예시: metricList 각각에 대해 데이터 조회 후 취합
  // 💡 DynamoDB의 Query는 PK 기준으로만 동작합니다. 위 예시는 contentId와 metric이 복합키로 구성된 테이블이라고 가정하고 작성했습니다. 실제 테이블 설계에 따라 Scan으로 바꿔야 할 수 있습니다.
  const results = [];

  for (const metric of metricList) {
    const params = {
      TableName: TABLE_NAME,
      KeyConditionExpression: 'contentId = :cid AND metric = :metric',
      ExpressionAttributeValues: {
        ':cid': contentId,
        ':metric': metric,
      },
      FilterExpression: '#date BETWEEN :startDate AND :endDate AND country IN (:countryList)',
      ExpressionAttributeNames: {
        '#date': 'date'
      },
      ExpressionAttributeValues: {
        ':startDate': startDate,
        ':endDate': endDate,
        ':countryList': countList,
        ':cid': contentId,
        ':metric': metric,
      }
    };

    const command = new QueryCommand(params);
    const { Items } = await docClient.send(command);
    results.push(...Items);
  }

  return results;
};
