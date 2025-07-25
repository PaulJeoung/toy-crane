/**
 * @swagger
 * tags:
 *   name: Member
 *   description: 회원 관련 API
 */

const express = require('express');
const router = express.Router();
const asyncWrapper = require('../common/asyncWrapper');
const { RequestParamsError } = require('../common/errors');
const memberManagementApi = require('../api/memberApi');

/**
 * @swagger
 * /api/member/signup:
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

/**
 * @swagger
 * /api/member/list:
 *   get:
 *     summary: 전체 회원 목록 조회
 *     tags: [Member]
 *     responses:
 *       200:
 *         description: 회원 목록 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       memberId:
 *                         type: string
 *                         example: user123
 *                       memberName:
 *                         type: string
 *                         example: 홍길동
 *                       birthInfo:
 *                         type: string
 *                         example: 1990-01-01
 */
router.get('/list', asyncWrapper(async (req, res) => {
    const result = await memberManagementApi.getMemberList();
    res.status(200).json(result);
}));

/**
 * @swagger
 * /api/member/modify:
 *   post:
 *     summary: 회원 정보 수정
 *     tags: [Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - memberId
 *             properties:
 *               memberId:
 *                 type: string
 *                 example: user123
 *               memberName:
 *                 type: string
 *                 example: 홍길동
 *               password:
 *                 type: string
 *                 example: newPassword123
 *               birthInfo:
 *                 type: string
 *                 example: 1991-02-02
 *     responses:
 *       200:
 *         description: 회원 수정 성공
 */
router.post('/modify', asyncWrapper(async (req, res) => {
    const { memberId,  memberName, password, birthInfo } = req.body;
    const result = await memberManagementApi.updateMember(req.body);
    res.status(200).json(result);
}));

/**
 * @swagger
 * /api/member/delete:
 *   delete:
 *     summary: 회원 삭제
 *     tags: [Member]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - memberId
 *             properties:
 *               memberId:
 *                 type: string
 *                 example: user123
 *     responses:
 *       200:
 *         description: 회원 삭제 성공
 */
router.delete('/delete', asyncWrapper(async (req, res) => {
    const { memberId } = req.body;
    const result = await memberManagementApi.deleteMember(req.body);
    res.status(200).json(result);
}))

module.exports = router;