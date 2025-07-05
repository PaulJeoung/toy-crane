const express = require('express');
const router = express.Router();
const userChecker = require('../utils/userChecker'); // 사용자 인증 미들웨어

const cranePreRegisterRouter = require('./cranePreRegisterRouter');
const newbiePromotionRouter = require('./newbiePromotionRouter');
const extAppPromotionRouter = require('./extPromotionRouter');

router.use('/member/pre-register', userChecker, cranePreRegisterRouter);

router.use('/evnet/promotion', userChecker, newbiePromotionRouter);

router.use('/ext/app/v1/promotion', userChecker, extAppPromotionRouter);

module.exports = router;