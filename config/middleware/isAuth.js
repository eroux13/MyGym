const { Model } = require("sequelize");
module.exports = function (req, res, next) {
    if (!req.session.logged_in) {
        res.redirect('/member-login');
      } else {
        next();
      }
}