const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../documentData/toy_ext_class_promotion.json');

const readExtPromotionData = () => {
    try {
        const jsonString = fs.readFileSync(DATA_PATH, 'utf-8');
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('External API was not Response', error);
        return [];
    }
};

module.exports.fetchPromotions = ({ page = 1, page_size = 5, from, to, adminId }) => {
    const allPromotions = readExtPromotionData();

    const fromTime = parseInt(from, 10);
    const toTime = parseInt(to, 10);

    // 1. 날짜 필터링
    const filtered = allPromotions.filter(promo => {
        return promo.from >= fromTime && promo.to <= toTime;
    });

    // 2. 페이징
    const pageNum = parseInt(page, 10);
    const sizeNum = parseInt(page_size, 10);

    const startIdx = (pageNum - 1) * sizeNum;
    const pagedData = filtered.slice(startIdx, startIdx + sizeNum);

    return {
        total: filtered.length,
        page: pageNum,
        page_size: sizeNum,
        data: pagedData
    };
};
