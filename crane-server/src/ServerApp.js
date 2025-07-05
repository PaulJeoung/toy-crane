const express = require('express');
const app = express();
const apiRouter = require('./routers/apiRouter');
const ExtPOFApiService = require('./services/extPOFApiService');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

async function startServer() {
  await ExtPOFApiService.init();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();