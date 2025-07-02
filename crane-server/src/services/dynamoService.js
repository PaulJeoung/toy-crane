const { queryByPKSK, queryByGSI, getMemberPreRegisterList } = require('../documentData/localDynamo');

/*
    "sid_tid_ctcd_pcode_dateType": "ksj880211_820810pjk_SEOUL_VISA_day",
    "sid_tid_clas_clasn-index": "ksj880211_820810pjk_100001_크레인",
    PK: sid_tid_ctcd_pcode_dateType, SK: sid_tid_clas_clasn-index
 */

const getByClassId = async (classId) => {
    return queryByGSI('classId', classId);
}

const getByMemberId = async (memberId) => {
    return queryByPKSK('memberId', memberId);
}

const getBySex = async (sex) => {
    return queryByGSI('sex', sex)
}

const getByCompoundKey = (pkValue, skPrefix) => {
    return queryByPKSK('sid_tid_ctcd_pcode_dateType', pkValue, 'sid_tid_clas_clasn-index', skPrefix);
};

const getScanQuery = () => getMemberPreRegisterList();

module.exports = {
    getScanQuery,
    getByClassId,
    getByMemberId,
    getBySex,
    getByCompoundKey
};