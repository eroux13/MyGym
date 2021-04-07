const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render("homepage");
});

router.get('/member-login', async (req, res) => {
    res.render("member-login");
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/member-dashboard', async (req, res) => {
    res.render("member-dashboard");
});
module.exports = router;