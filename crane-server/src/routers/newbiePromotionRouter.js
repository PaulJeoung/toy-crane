const express = require('express');
const router = express.Router();
const asyncWrapper = require('../utils/asyncWrapper');
const { RequestParamsError } = require('../utils/errors');
const extPromotionApi = require('../api/extPromotionApi');

router.get('/board/list', asyncWrapper(async (req, res) => {
    const memberId = req.query.memberId;
    if (!memberId) {
        throw new RequestParamsError('memberId is required');
    }
    const result = await extPromotionApi.newbieMemberList(memberId);
    res.status(200).json(result);
}))

module.exports = router;