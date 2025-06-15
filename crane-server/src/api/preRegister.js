const preRegisterService = require('../services/preRegisterService');

module.exports = {
  sellerSummary: async (params) => {
    const { dataType, endDate, sellerId, metricIdList } = params;
    // TODO: DB 조회 로직
    return { preRegister: 20000, installed: 20000 };
  },

  sellerTrend: async (params) => {
    const { dataType, endDate, sellerId, metricIdList } = params;
    return { preRegister: [4800, 4500], installed: [300, 400] };
  },

  sellerApplications: async (params) => {
    const { dataType, endDate, sellerId, metricIdList } = params;
    return [
      { contentId: "abcd1234", contentType: "casual game", contentName: "New heros", contentStatus: "pre-sales" }
    ];
  },

  contentSummary: async (params) => {
    const { dataType, endDate, sellerId, metricIdList } = params;
    return {
      contentId: "abcd1234",
      contentType: "casual game",
      contentName: "New heros",
      contentStatus: "pre-sales",
      preRegister: 20000,
      installed: 20000
    };
  },

  contentTrend: async (params) => {
    const { dataType, endDate, sellerId, metricIdList } = params;
    return [
      { contentId: "abcd1234", contentType: "casual game", contentName: "New heros", contentStatus: "pre-sales" },
      { trend: "newbie style", trendTarget: "10`s" }
    ];
  },

  // contentChannelTrend: async (params) => {
  //   const { dataType, startDate, endDate, contentId } = params;
  //   return {
  //     Direct: [10, 20, 30],
  //     Refferal: [100, 200, 250]
  //   };
  // },

  // channelSub: async (params) => {
  //   const { dataType, startDate, endDate, contentId, channelId } = params;
  //   return {
  //     Direct: [10, 20, 30],
  //     Refferal: [100, 200, 250],
  //     ChannelId: channelId
  //   };
  // },

  // subDetail: async (params) => {
  //   const { dataType, startDate, endDate, contentId, channelId, subChannelId } = params;
  //   return {
  //     Direct: [10, 20, 30],
  //     Refferal: [100, 200, 250],
  //     ChannelId: channelId,
  //     SubChannelId: subChannelId
  //   };
  // }
  
  contentChannelTrend: async (params) => {
  const { dataType, startDate, endDate, contentId, subChannel, subDetail } = params;

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
},
};


// exports.summary = async (params) => {
//   return await preRegisterService.getSummary(params);
// };

// module.exports = {
//   sellerSummary: async (req, res) => {
//     const { dataType, endDate, sellerId, metricIdList } = req.body;
//     // TODO: DB 조회 로직
//     res.json({ preRegister: 20000, installed: 20000 });
//   },

//   sellerTrend: async (req, res) => {
//     const { dataType, endDate, sellerId, metricIdList } = req.body;
//     res.json({ preRegister: [4800, 4500], installed: [300, 400] });
//   },

//   sellerApplications: async (req, res) => {
//     const { dataType, endDate, sellerId, metricIdList } = req.body;
//     res.json([
//       { contentId: "abcd1234", contentType: "casual game", contentName: "New heros", contentStatus: "pre-sales" }
//     ]);
//   },

//   contentSummary: async (req, res) => {
//     const { dataType, endDate, sellerId, metricIdList } = req.body;
//     res.json({
//       contentId: "abcd1234",
//       contentType: "casual game",
//       contentName: "New heros",
//       contentStatus: "pre-sales",
//       preRegister: 20000,
//       installed: 20000
//     });
//   },

//   contentTrend: async (req, res) => {
//     const { dataType, endDate, sellerId, metricIdList } = req.body;
//     res.json([
//       { contentId: "abcd1234", contentType: "casual game", contentName: "New heros", contentStatus: "pre-sales" },
//       { trend: "newbie style", trendTarget: "10`s" }
//     ]);
//   },

//   contentChannelTrend: async (req, res) => {
//     const { dataType, startDate, endDate, contentId } = req.body;
//     res.json({
//       Direct: [10, 20, 30],
//       Refferal: [100, 200, 250]
//     });
//   },

//   channelSub: async (req, res) => {
//     const { dataType, startDate, endDate, contentId, channelId } = req.body;
//     res.json({
//       Direct: [10, 20, 30],
//       Refferal: [100, 200, 250],
//       ChannelId: channelId
//     });
//   },

//   subDetail: async (req, res) => {
//     const { dataType, startDate, endDate, contentId, channelId, subChannelId } = req.body;
//     res.json({
//       Direct: [10, 20, 30],
//       Refferal: [100, 200, 250],
//       ChannelId: channelId,
//       SubChannelId: subChannelId
//     });
//   }
// };
