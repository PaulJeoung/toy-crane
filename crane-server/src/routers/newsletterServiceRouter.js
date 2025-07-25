const express = require('express');
const router = express.Router();
const asyncWrapper = require('../common/asyncWrapper');
const { RequestParamsError } = require('../common/errors');
const mailingService = require('../services/mailingService');

router.post('/send-email', asyncWrapper(async (req, res) => {
    const result = await mailingService.sendEmail();
    res.status(200).json(result);
}));

// router.get('/list', asyncWrapper(async (req, res) => {
//     const result = await memberManagementApi.getMemberList();
//     res.status(200).json(result);
// }));

module.exports = router;