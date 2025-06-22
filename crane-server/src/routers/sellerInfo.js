const express = require('express');
const router = express.Router();
const asyncWrapper = require('../utils/asyncWrapper');

const { sellerInfoQuery } = require('../api/sellerInfoQuery');
const { contentRetrieveQuery } = require('../api/contentRetrieveQuery');
const { sellerRetriveQuery } = require('../api/sellerRetriveQuery');
const { sellerTrendQuery } = require('../api/sellerTrendQuery');
const { contentTrendQuery } = require('../api/contentTrendQuery');
const { sellerMetricQuery } = require('../api/sellerMetricQuery');

// ✅ 1. PartitionKey 조회
router.post('/summary-query', asyncWrapper(async (req, res) => {
    const result = await sellerInfoQuery(req.body);
    res.status(200).send(result);
}));

// ✅ 2. GSI 조회
router.post('/content-retrieve-query', asyncWrapper(async (req, res) => {
    const result = await contentRetrieveQuery(req.body);
    res.status(200).send(result);
}));

// ✅ 3. SecondaryKey 조회
router.post('/seller-retrieve-query', asyncWrapper(async (req, res) => {
    const result = await sellerRetriveQuery(req.body);
    res.status(200).send(result);
}));

// ✅ 4. PartitionKey + GSI 조회
router.post('/seller-trend-query', asyncWrapper(async (req, res) => {
    const result = await sellerTrendQuery(req.body);
    res.status(200).send(result);
}));

// ✅ 5. GSI + SecondaryKey 조회
router.post('/content-trend-query', asyncWrapper(async (req, res) => {
    const result = await contentTrendQuery(req.body);
    res.status(200).send(result);
}));

// ✅ 6. PartitionKey + SecondaryKey 조회
router.post('/seller-metric-query', asyncWrapper(async (req, res) => {
    const result = await sellerMetricQuery(req.body);
    res.status(200).send(result);
}));

module.exports = router;
