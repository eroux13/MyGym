
var express = require('express');
var app = express(); 

app.use(function (req, res, next) {
    var loggedIn
    if (req.user) {
        loggedIn = true;
    } else {
        loggedIn = false;
    }
    res.locals.login = loggedIn;
    next();
  });

module.exports = loggedIn