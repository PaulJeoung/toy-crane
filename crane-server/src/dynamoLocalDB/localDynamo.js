const fs = require('fs');
const path = require('path');

const getAllLocalItems = () => {
  const filePath = path.join(__dirname, 'sample_table.json');
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

module.exports = { getAllLocalItems };
