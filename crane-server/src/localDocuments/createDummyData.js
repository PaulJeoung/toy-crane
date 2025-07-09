function randomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function randomNumbers() {
    const randomNum = Math.floor(Math.random() * 10000000); // 7자리 랜덤 숫자
    return `0000000${randomNum}`.slice(-14); // 앞에 `0000000` + 숫자 조합
}

function generateSampleData(numPromotions = 3, sourcesPerPromotion = 2, targetsPerSource = 2) {
    const data = {
        externalPromotionSearchlResult: [],
        externalPromotionDetailResult: [],
        awsDynamoDbResult: [],
    };

    // Generate promotions & related data
    for (let i = 0; i < numPromotions; i++) {
        const promotionId = `${randomString(32)}`; // unique promotion_id
        const promotionName = `Promotion ${randomString(5)} ${i + 1}`;

        // Create `externalPromotionSearchlResult` entry
        const searchResult = {
            promotion_id: promotionId,
            promotion_name: promotionName,
            from: 1750257427000,
            to: 1750352195000,
            activated: true,
        };
        data.externalPromotionSearchlResult.push(searchResult);

        // Generate sources/targets combinations
        for (let j = 0; j < numPromotions; j++) {
            const sourceGroupId = `${randomString(30)}`; // unique source group id
            const sourceGroupName = `Source Group ${randomString(5)} ${j + 1}`;

            const sourceGames = []; // Source 그룹 안의 Games
            for (let sg = 0; sg < Math.floor(Math.random() * 5) + 1; sg++) { // 랜덤 게임 생성
                const contentId = `${randomNumbers()}`;
                const contentTitle = `Source Game ${randomString(5)}`;
                sourceGames.push({
                    content_id: contentId, // 고유 content_id
                    content_title: contentTitle, // 고유 content_title
                });
            }

            for (let k = 0; k < targetsPerSource; k++) {
                const targetGroupId = `${randomString(30)}`; // unique target group id
                const targetGroupName = `Target Group ${randomString(5)} ${k + 1}`;

                const targetGames = []; // Target 그룹 안의 Games
                for (let tg = 0; tg < Math.floor(Math.random() * 5) + 1; tg++) { // 랜덤 게임 생성
                    const contentId = `${randomNumbers()}`;
                    const contentTitle = `Target Game ${randomString(5)}`;
                    targetGames.push({
                        content_id: contentId, // 고유 content_id
                        content_title: contentTitle, // 고유 content_title
                    });
                }

                const randomSourceGame = sourceGames[Math.floor(Math.random() * sourceGames.length)];
                const randomTargetGame = targetGames[Math.floor(Math.random() * targetGames.length)];

                // Create `externalPromotionDetailResult` entry
                const detailResult = {
                    promotion_id: promotionId,
                    promotion_name: promotionName,
                    from: 1750257427000,
                    to: 1750352195000,
                    activated: true,
                    source_game_group: {
                        game_group_id: sourceGroupId,
                        game_group_name: sourceGroupName,
                        games: sourceGames, // Source Games 배열
                    },
                    target_game_group: {
                        game_group_id: targetGroupId,
                        game_group_name: targetGroupName,
                        games: targetGames, // Target Games 배열
                    },
                };
                data.externalPromotionDetailResult.push(detailResult);

                // Create `awsDynamoDbResult` entry
                const dynamoResult = {
                    promotion: promotionId,
                    source: randomSourceGame.content_id, // Source가 사용된 game의 content_id
                    sourceName: randomSourceGame.content_title, // Source가 사용된 game의 content_title
                    target: randomTargetGame.content_id, // Target이 사용된 game의 content_id
                    targetName: randomTargetGame.content_title, // Target이 사용된 game의 content_title
                    'promotion#source#target': `${promotionId}#${randomSourceGame.content_id}#${randomTargetGame.content_id}`,
                    click: Math.floor(Math.random() * 10000), // Random 클릭 수
                    impression: Math.floor(Math.random() * 10000), // Random 노출 수
                    startDate: '2025-06-01',
                    endDate: '2025-07-01',
                };
                data.awsDynamoDbResult.push(dynamoResult);
            }
        }
    }

    return data;
}

// Generate & Print Sample Data
// const sampleData = generateSampleData(3, 2, 2);
// console.log(JSON.stringify(sampleData, null, 2));

module.exports = generateSampleData;