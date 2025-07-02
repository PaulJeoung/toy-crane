const promotionService = require('../services/extPromotionApiService');

module.exports.getPromotionList = async ( params ) => {
    const allPromotionList = promotionService.fetchPromotions(params);
    // allPromotionList.forEach(item => {
    //     console.log(item);
    // })
    return allPromotionList;
};
