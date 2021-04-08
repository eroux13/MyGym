const { Model } = require("sequelize");
module.exports = function (req, res, next) {
    if (req.user) {
        res.locals.login = req.isAuthenticated();
        console.log(res.locals.login);
        return next();
    }
    return res.redirect("/member-login");
}