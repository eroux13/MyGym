
var express = require('express');
var app = express(); 


module.exports = app.use(function (req, res, next) {
    res.locals.login = req.isAuthenticated();
    next();
  });