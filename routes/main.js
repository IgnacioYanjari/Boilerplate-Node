const express = require('express');
const app = express();

var indexRouter = require('./index');
var usersRouter = require('./users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
