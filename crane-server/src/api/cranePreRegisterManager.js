const { getScanQuery, getByClassId, getByMemberId, getBySex, getByCompoundKey } = require('../services/dynamoService');
const { getDateRange } = require('../utils/dateUtil');
const {json} = require("express");

module.exports.memberPreRegisterSummary = async( memberId, metricIdList, startDate, endDate, dateType ) => {
  /*
    조회한 기간동안 등록한 유저의 등록수 및 카드별, 지역별 비교
    1. 기간동안 유저 등록 합산
    2. 기간동안 등록 강의 합산
    3. 기간동안 카드 종류
    4. 기간동안 유저 등록 성별 합산
    {
        "member_pre_register" : 10,
        "member_sex_summary" : { "male" : 7, "female" : 3 },
        "member_paid_card" : { "visa" : 3, "toss" : 3, "kb" : 4 },
        "class_summary" : { "크레인" : 7, "타워크레인" : 2, "지브크레인" : 0, "카고크레인" : 1, "천공기" : 0 }
     }
   */

  const result = await getScanQuery ();
  // console.log(JSON.stringify(result, null, 2));

  const filtered = result.filter(item => {
    const itemDate = new Date(item.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (
        itemDate >= start &&
        itemDate <= end &&
        (!dateType || item.sid_tid_ctcd_pcode_dateType.endsWith(dateType))
    );
  });
  console.log(JSON.stringify(filtered, null, 2));

  const summaryMetricList = {
    member_pre_register : filtered.length,
    member_sex_summary : {male: 0, female: 0},
    member_paid_card: { VISA: 0, TOSS: 0, KB: 0 },
    class_summary: {
      크레인: 0,
      타워크레인: 0,
      지브크레인: 0,
      카고크레인: 0,
      천공기: 0
    }
  };

  filtered.forEach(item => {
    if (item.sex === 'male' || item.sex ==='female'){
      summaryMetricList.member_sex_summary[item.sex]++;
    }
    const paid = item.paid_code?.toLowerCase();
    if (summaryMetricList.member_paid_card.hasOwnProperty(paid)) {
      summaryMetricList.member_paid_card[paid]++;
    }
    const className = item.class_name;
    if (summaryMetricList.class_summary.hasOwnProperty(className)) {
      summaryMetricList.class_summary[className]++;
    }
  })
  console.log(JSON.stringify(summaryMetricList, null, 2));
  return summaryMetricList;
};
