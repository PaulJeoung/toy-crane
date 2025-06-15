const express = require('express');
const router = express.Router();
const asyncWrapper = require('../utils/asyncWrapper');
const { RequestParameterError } = require('../utils/errors');
const preRegisterController = require('../api/preRegister');

router.post('/summary', asyncWrapper(async (req, res) => {
  const { dataType, startDate, endDate, salesId, metricIdList } = req.body;

  if (!dataType || !startDate || !endDate || !salesId) {
    throw new RequestParameterError('Missing required parameters');
  }

  const result = await preRegisterController.summary({ dataType, startDate, endDate, salesId, metricIdList });
  res.status(200).json(result);
}));

module.exports = router;
