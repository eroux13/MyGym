const router = require('express').Router();
const passport = require('passport');
const Member = require('../models/member.js')

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

router.post('/member-login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/member-login'
}))

router.post('/signup', async (req, res) => {
    try {
      const userData = await Member.create({
          first_name: req.body.firstname,
          last_name: req.body.lastname,
          email: req.body.email,
          // update this, just testing to see if the post is working
          tier_id: 1,
          password: req.body.password
      });
  
      res.redirect('/member-login');
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    //   res.redirect('/signup');
    }
  });

module.exports = router;