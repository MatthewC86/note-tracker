const express = require('express');

// Import router for html
const htmlRouter = require('./htmlRoutes');

const app = express();

router.use('/htmlRouter', htmlRouter);

module.exports = app;