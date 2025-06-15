const express = require('express');
const router = express.Router();

const userChecker = require('../utils/userChecker'); // 예시용, 임시로 통과만 시킴
// const salesPreRegisterRouter = require('./preRegisterRouter');
// const storePreRegisterSummaryRouter = require('./storePreRegisterRouter')
const preRegisterRouter = require('./preRegisterRouter');
const storePreRegisterSummaryRouter = require('./storePreRegisterRouter');

router.use('/sales/pre-register', userChecker, preRegisterRouter);
router.use('/store/pre-register-summary', userChecker, storePreRegisterSummaryRouter);

module.exports = router;