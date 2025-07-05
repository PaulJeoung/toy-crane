const promotionService = require('../services/extPromotionApiService');
const pofApiService = require('../services/extPOFApiService');


module.exports.getPromotionList = async ( params ) => {
    const allPromotionList = promotionService.fetchPromotions(params);
    // allPromotionList.forEach(item => {
    //     console.log(item);
    // })
    return allPromotionList;
};

module.exports.newbieMemberList = async ( params ) => {
    const param = {
        memberId : params,
    }
    const headers = {}
    let memberList = [];
    const response = await pofApiService.fetchData('/api/board/list', param, headers);
    console.log('pofApiService.fetchData() 외부 조회 완료');
    response.contentList.forEach((item, idx) => {
        if (item.author === '시험자' && item.status === 'OPEN') {
            memberList.push(
                {
                    indexValue : idx,
                    userName : item.author,
                    status : item.status,
                });
        }
    });

    return memberList.map(item => ({
        indexValue : item.indexValue,
        userName : item.userName,
        status : item.status,
    }));
}
