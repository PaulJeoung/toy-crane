const express = require('express');
const router = express.Router();
const asyncWrapper = require('../common/asyncWrapper');
const { RequestParamsError } = require('../common/errors');
const memberManagementApi = require('../api/memberApi');

/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: 회원가입
 *     tags: [Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - memberId
 *               - memberName
 *               - password
 *               - birthInfo
 *             properties:
 *               memberId:
 *                 type: string
 *                 example: user123
 *               memberName:
 *                 type: string
 *                 example: 홍길동
 *               password:
 *                 type: string
 *                 example: mySecretPass
 *               birthInfo:
 *                 type: string
 *                 example: 1990-01-01
 *     responses:
 *       200:
 *         description: 회원가입 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: 회원가입 완료
 *                 data:
 *                   type: object
 *                   properties:
 *                     memberId:
 *                       type: string
 *                       example: user123
 */

router.post('/signup', asyncWrapper(async (req, res) => {
    const { memberId, memberName, password, birthInfo } = req.body;
    if(!req.body) throw new RequestParamsError('Fields are missing');
    const result = await memberManagementApi.postMemberSignUp(req.body);
    res.status(200).json(result);
}));

module.exports = router;