const express = require('express');
const app = express();
const apiRouter = require('./routers/apiRouter');
const ExtPOFApiService = require('./services/extPOFApiService');
const { swaggerUi, specs } = require('./swagger');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // swagger 문서 경로

async function startServer() {
  await ExtPOFApiService.init();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📘 Swagger docs at http://localhost:${PORT}/api-docs`);
  });
};

startServer();