const express = require('express');

// Import routers for notes and html
const notesRouter = require('./notesRouter');
const htmlRouter = require('./htmlRouter');

const app = express();

app.use('/notesRouter', notesRouter);
app.use('/htmlRouter', htmlRouter);

module.exports = app;