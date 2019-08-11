const express = require('express');
const app = express();

var usersRouter = require('./users');
var authRouter = require('./auth');

app.use('/users', usersRouter);
app.use('/auth', authRouter);

module.exports = app;
