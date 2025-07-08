const express = require('express');
const router = express.Router();
const asyncWrapper = require('../common/asyncWrapper');
const { RequestParamsError } = require('../common/errors');
const extPromotionApi = require('../api/extPromotionApi');

/**
 * @swagger
 * /api/event/promotion/board/list:
 *   get:
 *     summary: 프로모션 유저 정보 조회
 *     description: memberId를 기준으로 외부 Spring 서버 API를 사용해 유저 정보를 가져와 가공한 정보를 제공하는 API
 *     parameters:
 *       - in: query
 *         name: memberId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 성공
 */
router.get('/board/list', asyncWrapper(async (req, res) => {
    const memberId = req.query.memberId;
    if (!memberId) {
        throw new RequestParamsError('memberId is required');
    }
    const result = await extPromotionApi.newbieMemberList(memberId);
    res.status(200).json(result);
}))

module.exports = router;