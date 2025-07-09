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

/**
 * @swagger
 * /api/event/promotion/create-random-data:
 *   get:
 *     summary: 랜덤 프로모션 데이터를 생성
 *     description: 랜덤한 프로모션 데이터를 생성하고 반환합니다.
 *     tags:
 *       - Promotion
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 externalPromotionSearchlResult:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       promotion_id:
 *                         type: string
 *                         description: 프로모션 ID
 *                       promotion_name:
 *                         type: string
 *                         description: 프로모션 이름
 *                       from:
 *                         type: integer
 *                         description: 시작 시간 밀리초 (타임스탬프)
 *                       to:
 *                         type: integer
 *                         description: 종료 시간 밀리초 (타임스탬프)
 *                       activated:
 *                         type: boolean
 *                         description: 활성화 여부
 *                 externalPromotionDetailResult:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       promotion_id:
 *                         type: string
 *                         description: 프로모션 ID
 *                       source_game_group:
 *                         type: object
 *                         properties:
 *                           game_group_id:
 *                             type: string
 *                             description: 소스 게임 그룹 ID
 *                           game_group_name:
 *                             type: string
 *                             description: 소스 게임 그룹 이름
 *                           games:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 content_id:
 *                                   type: string
 *                                   description: 콘텐츠 ID
 *                                 content_title:
 *                                   type: string
 *                                   description: 콘텐츠 제목
 *                       target_game_group:
 *                         type: object
 *                         properties:
 *                           game_group_id:
 *                             type: string
 *                             description: 타겟 게임 그룹 ID
 *                           game_group_name:
 *                             type: string
 *                             description: 타겟 게임 그룹 이름
 *                           games:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 content_id:
 *                                   type: string
 *                                   description: 콘텐츠 ID
 *                                 content_title:
 *                                   type: string
 *                                   description: 콘텐츠 제목
 */
router.get('/create-random-data', asyncWrapper(async (req, res) => {
    const result = await extPromotionApi.newbieDummyData(); // 랜덤 데이터 생성
    res.status(200).json(result);
}));

module.exports = router;