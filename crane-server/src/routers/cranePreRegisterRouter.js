const express = require('express');
const router = express.Router();
const asyncWrapper = require('../utils/asyncWrapper');
const { RequestParamterError } = require('../utils/errors');

const preRegisterApi = require('../api/cranePreRegisterManager');

// 회원수 요약 조회
router.post('/member-summary', asyncWrapper(async (req, res) => {
    const memberId = req.body.memberId;
    const metricIdList = req.body.metricIdList;
    const dateType = req.body.dateType ?? 'day';
    const startDate = req.body.startDate ?? null;
    const endDate = req.body.endDate ?? null;

    if (!memberId || !metricIdList || !dateType) {
        throw new RequestParamterError('parameter is missing');
    }
    const result = await preRegisterApi.memberPreRegisterSummary( memberId, metricIdList, startDate, endDate, dateType );
    res.status(200).send(result);
}));

module.exports = router;
