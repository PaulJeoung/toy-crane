const express = require('express');
const router = express.Router();
const asyncWrapper = require('../utils/asyncWrapper');
const { RequestParameterError } = require('../utils/errors');
const promotionApi = require('../api/extPromotionApi');

// External API 호출
router.get('/list', async (req, res) => {
    const { page = 1, page_size = 5, from, to } = req.query;

    if (!from || !to) {
        throw new RequestParameterError('from, to are required');
    }

    const result = await promotionApi.getPromotionList({
        page: Number(page),
        pageSize: Number(page_size),
        from: Number(from),
        to: Number(to)
    });

    res.status(200).send(result);
});

router.get('/ping', (req, res) => {
    res.send('pong');
});

module.exports = router;
