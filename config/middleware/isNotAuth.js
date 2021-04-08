const { Model } = require("sequelize");
module.exports = function (req, res, next) {
    if (req.user) {
        return res.redirect('/member-dashboard')
    }
    return next();
}