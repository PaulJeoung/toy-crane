const express = require('express');
const app = express();
const apiRouter = require('./routers/apiRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
