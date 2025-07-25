const express = require('express');
const router = express.Router();
const userChecker = require('../common/userChecker'); // 사용자 인증 미들웨어

// Toy project
const memberManagementRouter = require('../routers/memberRouter');
const newsletterRouter = require('../routers/newsletterServiceRouter');

router.use('/member', userChecker, memberManagementRouter);
router.use('/newsletter', userChecker, newsletterRouter);

module.exports = router;