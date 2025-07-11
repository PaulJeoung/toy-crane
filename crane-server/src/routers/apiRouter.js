const express = require('express');
const router = express.Router();
const userChecker = require('../common/userChecker'); // 사용자 인증 미들웨어

// Toy project
const memberManagementRouter = require('./memberRouter');

router.use('/user', userChecker, memberManagementRouter);


module.exports = router;