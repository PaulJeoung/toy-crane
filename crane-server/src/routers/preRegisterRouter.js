const express = require('express');
const router = express.Router();
const preRegisterService = require('../api/preRegister');

router.post('/seller-summary', async (req, res, next) => {
  try {
    const result = await preRegisterService.sellerSummary(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/seller-trend', async (req, res, next) => {
  try {
    const result = await preRegisterService.sellerTrend(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/seller-applications', async (req, res, next) => {
  try {
    const result = await preRegisterService.sellerApplications(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/content-summary', async (req, res, next) => {
  try {
    const result = await preRegisterService.contentSummary(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/content-trend', async (req, res, next) => {
  try {
    const result = await preRegisterService.contentTrend(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/content-channel-trend', async (req, res, next) => {
  try {
    const result = await preRegisterService.contentChannelTrend(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// router.post('/content-channel-trend/sub', async (req, res, next) => {
//   try {
//     const result = await preRegisterService.channelSub(req.body);
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post('/content-channel-trend/sub/detail', async (req, res, next) => {
//   try {
//     const result = await preRegisterService.subDetail(req.body);
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const asyncWrapper = require('../utils/asyncWrapper');
// const preRegisterService = require('../api/preRegister');

// // 1. /api/pre-register/seller-summary
// router.post('/seller-summary', async (req, res) => {
//   const result = await preRegisterService.sellerSummary(req.body);
//   res.json(result);
// });

// // 2. /api/pre-register/seller-trend
// router.post('/seller-trend', async (req, res, next) => {
//   try {
//     const result = await preRegisterApi.sellerTrend(req.body);
//     res.json(result);
//   } catch (err) {
//     next(err);
//   }
// });

// // 3. /api/pre-register/seller-applications
// router.post('/seller-applications', async (req, res) => {
//   const result = await preRegisterService.sellerApplications(req.body);
//   res.json(result);
// });

// // 4. /api/pre-register/content-summary
// router.post('/content-summary', async (req, res) => {
//   const result = await preRegisterService.contentSummary(req.body);
//   res.json(result);
// });

// // 5. /api/pre-register/content-trend
// router.post('/content-trend', async (req, res) => {
//   const result = await preRegisterService.contentTrend(req.body);
//   res.json(result);
// });

// // 6. /api/pre-register/content-channel-trend
// router.post('/content-channel-trend', async (req, res) => {
//   const result = await preRegisterService.contentChannelTrend(req.body);
//   res.json(result);
// });

// // 7. /api/pre-register/content-channel-trend/sub
// router.post('/content-channel-trend/sub', async (req, res) => {
//   const result = await preRegisterService.channelSub(req.body);
//   res.json(result);
// });

// // 8. /api/pre-register/content-channel-trend/sub/detail
// router.post('/content-channel-trend/sub/detail', async (req, res) => {
//   const result = await preRegisterService.channelSubDetail(req.body);
//   res.json(result);
// });

// module.exports = router;


// // 1. Seller Summary
// router.post('/seller-summary', asyncWrapper(preRegisterService.sellerSummary));

// // 2. Seller Trend
// router.post('/seller-trend', asyncWrapper(preRegisterService.sellerTrend));

// // 3. Seller Applications
// router.post('/seller-applications', asyncWrapper(preRegisterService.sellerApplications));

// // 4. Content Summary
// router.post('/content-summary', asyncWrapper(preRegisterService.contentSummary));

// // 5. Content Trend
// router.post('/content-trend', asyncWrapper(preRegisterService.contentTrend));

// // 6. Content Channel Trend
// router.post('/content-channel-trend', asyncWrapper(preRegisterService.contentChannelTrend));

// // 7. Channel Sub (optional channelId)
// router.post('/content-channel-trend/sub-channel', asyncWrapper(preRegisterService.channelSub));

// // 8. Sub Detail (optional subChannelId)
// router.post('/content-channel-trend/sub-detail', asyncWrapper(preRegisterService.subDetail));

// module.exports = router;
