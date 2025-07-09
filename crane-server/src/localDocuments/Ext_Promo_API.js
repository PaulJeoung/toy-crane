const externalPromotionSearchlResult = {
    "promotion_id" : "9673c420v89432eva211ee799966ce75",
    "promotion_name": "test promotion #1,",
    "from": 1750257427000,
    "to": 1750352195000,
    "activated": false
}

const externalPromotionDetailResult = {
    "promotion_id" : "9673c420v89432eva211ee799966ce75",
    "promotion_name": "test promotion #1",
    "from": 1750257427000,
    "to": 1750352195000,
    "activated": false,
    "source_game_group": {
        "game_group_id": "e248d723ef041125sas4w2524sc5sd",
        "game_group_name": "test source group #1",
        "games" : [
            {
                "content_id" : "00000005041833",
                "content_title": "Instant_Eve1"
            },
            {
                "content_id" : "00000006041833",
                "content_title": "Instant_Eve_2025"
            }
        ]},
    "target_game_group": {
        "game_group_id": "e578d723ef041125sas4wKL24sc5sd",
        "game_group_name": "test target group #1",
        "games" : [
            {
                "content_id" : "90000005041833",
                "content_title": "Instant_Eve_and_Beyond"
            },
            {
                "content_id" : "90000006041833",
                "content_title": "Instant_Gram"
            }
        ]
    }
}

const awsDynamoDbResult = {
    Items : [
        {
            promotion : "9673c420v89432eva211ee799966ce75",
            source : "00000005041833",
            target : "90000005041833",
            'promotion#source#target' : '9673c420v89432eva211ee799966ce75#00000005041833#90000005041833',
            click : 29100,
            impression : 29221,
            startDate : 2025-06-01,
            endDate : 2025-07-01,
        },
        {
            promotion : "9673c420v89432eva211ee799966ce75",
            source : "00000006041833",
            target : "90000006041833",
            'promotion#source#target' : '9673c420v89432eva211ee799966ce75#00000006041833#90000006041833',
            click : 299100,
            impression : 309221,
            startDate : 2025-06-11,
            endDate : 2025-06-30,
        }

    ]
}