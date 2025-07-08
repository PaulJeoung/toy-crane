const express = require('express');
const router = express.Router();
const userChecker = require('../utils/userChecker'); // 사용자 인증 미들웨어

// SI project sample
const cranePreRegisterRouter = require('./cranePreRegisterRouter');
const newbiePromotionRouter = require('./newbiePromotionRouter');
const extAppPromotionRouter = require('./extPromotionRouter');

// Toy project
const memberManagementRouter = require('./memberManagementRouter');

router.use('/user', userChecker, memberManagementRouter);


router.use('/member/pre-register', userChecker, cranePreRegisterRouter);
router.use('/event/promotion', userChecker, newbiePromotionRouter);
router.use('/ext/app/v1/promotion', userChecker, extAppPromotionRouter);

module.exports = router;