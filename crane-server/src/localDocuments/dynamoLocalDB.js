const fs = require('fs');
const path = require('path');

const getMemberPreRegisterList = () => {
  const filePath = path.join(__dirname, 'toy_prereg_member_metric.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
};

// PartitionKey + SortKey 기반 조회 흉내
const queryByPKSK = (pkField, pkValue, skField, skPrefix = null) => {
  const data = getMemberPreRegisterList();
  return data.filter(item => {
    const pkMatch = item[pkField] === pkValue;
    const skMatch = skPrefix ? item[skField]?.startsWith(skPrefix) : true;
    return pkMatch && skMatch;
  });
};

// GSI 흉내 (인덱스 필드 기준 조회)
const queryByGSI = (gsiField, value) => {
  const data = getMemberPreRegisterList();
  return data.filter(item => item[gsiField] === value);
};

module.exports = {
  getMemberPreRegisterList,
  queryByPKSK,
  queryByGSI
};