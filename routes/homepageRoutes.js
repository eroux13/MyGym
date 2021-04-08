const router = require('express').Router();
const passport = require('passport');
const Member = require('../models/member.js');
const isAuth = require('../config/middleware/isAuth');
const isNotAuth = require('../config/middleware/isNotAuth');

router.get('/', async (req, res) => {
    res.render("homepage");
});

router.get('/member-login', isNotAuth, async (req, res) => {
    res.render("member-login");
});

router.get('/signup', isNotAuth, async (req, res) => {
    res.render('signup');
});

router.get('/member-dashboard', isAuth, async (req, res) => {
    res.render("member-dashboard");
});

router.post('/member-login', passport.authenticate('local', {
    successRedirect: '/member-dashboard',
    failureRedirect: '/member-login',
    failureFlash: true
}))

router.post('/signup', async (req, res) => {
    try {
      const userData = await Member.create({
          first_name: req.body.firstname,
          last_name: req.body.lastname,
          email: req.body.email,
          // update this, just testing to see if the post is working
          tier_id: req.body.tier,
          password: req.body.password
      });
  
      res.redirect('/member-login');
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    //   res.redirect('/signup');
    }
  });

router.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/member-login')
})

module.exports = router;