const express = require('express');
const router = express.Router();
const userChecker = require('../utils/userChecker'); // 사용자 인증 미들웨어

const sellerInfoRouter = require('./sellerInfo');          // sellerInfo.js 라우터

router.use('/seller/info', userChecker, sellerInfoRouter);

module.exports = router;