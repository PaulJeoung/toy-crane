const express = require('express');
const { asyncWrapper } = require('../utils/asyncWrapper');
const { fetchMetricData } = require('../services/metaService');

const router = express.Router();

router.post('content-search-trend', asyncWrapper(async (req, res) => {
    const data = await fetchMetricData(req.body);
    res.json(data);
}));

module.exports = router;