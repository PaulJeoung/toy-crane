exports.getSummary = async ({ dataType, startDate, endDate, salesId, metricIdList }) => {
  // 실제 DB 로직 대신 목업 데이터 반환
  return {
    message: 'Pre-sale summary API is working.',
    received: { dataType, startDate, endDate, salesId, metricIdList }
  };
};

exports.sellerSummary = async ({ dataType, endDate, sellerId, metricIdList }) => {
  return { preRegister: 20000, installed: 20000 };
};

exports.sellerTrend = async ({ dataType, endDate, sellerId, metricIdList }) => {
  return {
    preRegister: [4800, 4500, 4000],
    installed: [300, 400, 500]
  };
};

exports.sellerApplications = async ({ dataType, endDate, sellerId, metricIdList }) => {
  return [
    {
      contentId: 'abcd1234',
      contentType: 'casual game',
      contentName: 'New heros',
      contentStatus: 'pre-sales'
    }
  ];
};

exports.contentSummary = async ({ dataType, endDate, sellerId, metricIdList }) => {
  return {
    content: {
      contentId: 'abcd1234',
      contentType: 'casual game',
      contentName: 'New heros',
      contentStatus: 'pre-sales'
    },
    preRegister: 20000,
    installed: 20000
  };
};

exports.contentTrend = async ({ dataType, endDate, sellerId, metricIdList }) => {
  return [
    {
      contentId: 'abcd1234',
      contentType: 'casual game',
      contentName: 'New heros',
      contentStatus: 'pre-sales'
    },
    {
      trend: 'newbie style',
      trendTarget: "10's"
    }
  ];
};

// exports.contentChannelTrend = async ({ dataType, startDate, endDate, contentId }) => {
//   return {
//     Direct: [10, 20, 30, 500],
//     Referral: [100, 200, 250, 600]
//   };
// };

// exports.channelSub = async ({ dataType, startDate, endDate, contentId, channelId }) => {
//   return {
//     Direct: [10, 20, 30, 500],
//     Referral: [100, 200, 250, 600],
//     channelId
//   };
// };

// exports.channelSubDetail = async ({ dataType, startDate, endDate, contentId, channelId, subChannelId }) => {
//   return {
//     Direct: [10, 20, 30, 500],
//     Referral: [100, 200, 250, 600],
//     channelId,
//     subChannelId
//   };
// };

// exports.contentChannelTrend = async ({ dataType, startDate, endDate, contentId, subChannel, subDetail }) => {
//   if (subChannel && subDetail) {
//     // 9번: subChannel + subDetail
//     return {
//       type: 'subDetail',
//       contentId,
//       subChannel,
//       subDetail,
//       data: {
//         Direct: [300, 400, 500],
//         Referral: [100, 200, 300]
//       }
//     };
//   } else if (subChannel) {
//     // 8번: subChannel만 있음
//     return {
//       type: 'subChannel',
//       contentId,
//       subChannel,
//       data: {
//         Direct: [30, 40, 50],
//         Referral: [10, 20, 30]
//       }
//     };
//   } else {
//     // 7번: 아무것도 없음
//     return {
//       type: 'base',
//       contentId,
//       data: {
//         Direct: [10, 20, 30],
//         Referral: [100, 200, 250]
//       }
//     };
//   }
// };

exports.contentChannelTrend = async ({ dataType, startDate, endDate, contentId, subChannel, subDetail }) => {
  if (subChannel && subDetail) {
    return {
      message: "subChannel + subDetail 트렌드 데이터",
      subChannel,
      subDetail,
      data: [1, 2, 3]
    };
  }

  if (subChannel) {
    return {
      message: "subChannel 트렌드 데이터",
      subChannel,
      data: [10, 20, 30]
    };
  }

  return {
    message: "기본 채널 트렌드",
    Direct: [10, 20, 30],
    Referral: [100, 200, 250]
  };
};


// module.exports = {
//   sellerSummary: async ({ dataType, endDate, sellerId, metricIdList }) => {
//     return { preRegister: 20000, installed: 20000 };
//   },

//   sellerTrend: async ({ dataType, endDate, sellerId, metricIdList }) => {
//     return {
//       preRegister: [4800, 4500, 4000],
//       installed: [300, 400, 500]
//     };
//   },

//   sellerApplications: async ({ dataType, endDate, sellerId, metricIdList }) => {
//     return [
//       {
//         contentId: 'abcd1234',
//         contentType: 'casual game',
//         contentName: 'New heros',
//         contentStatus: 'pre-sales'
//       }
//     ];
//   },

//   contentSummary: async ({ dataType, endDate, sellerId, metricIdList }) => {
//     return {
//       content: {
//         contentId: 'abcd1234',
//         contentType: 'casual game',
//         contentName: 'New heros',
//         contentStatus: 'pre-sales'
//       },
//       preRegister: 20000,
//       installed: 20000
//     };
//   },

//   contentTrend: async ({ dataType, endDate, sellerId, metricIdList }) => {
//     return [
//       {
//         contentId: 'abcd1234',
//         contentType: 'casual game',
//         contentName: 'New heros',
//         contentStatus: 'pre-sales'
//       },
//       {
//         trend: 'newbie style',
//         trendTarget: "10's"
//       }
//     ];
//   },

//   contentChannelTrend: async ({ dataType, startDate, endDate, contentId }) => {
//     return {
//       Direct: [10, 20, 30, 500],
//       Referral: [100, 200, 250, 600]
//     };
//   },

//   channelSub: async ({ dataType, startDate, endDate, contentId, channelId }) => {
//     return {
//       Direct: [10, 20, 30, 500],
//       Referral: [100, 200, 250, 600],
//       channelId
//     };
//   },

//   channelSubDetail: async ({ dataType, startDate, endDate, contentId, channelId, subChannelId }) => {
//     return {
//       Direct: [10, 20, 30, 500],
//       Referral: [100, 200, 250, 600],
//       channelId,
//       subChannelId
//     };
//   }
// };
