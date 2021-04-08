const router = require('express').Router();
const passport = require('passport');
const Member = require('../models/member.js');
const Tier = require('../models/tier.js');
const Class = require('../models/class.js');
const isAuth = require('../config/middleware/isAuth');
const isNotAuth = require('../config/middleware/isNotAuth');
const isLoggedIn = require('../config/middleware/loggedIn')

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
    try {
        const unserializedUser = await Member.findByPk(req.session.passport.user, {
            include: [{
                model: Tier,
                model: Class
            }]
        })

        const user = unserializedUser.get({ plain: true });
        console.log(user);
    
        res.render('member-dashboard', { 
          user
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.post('/member-login', passport.authenticate('local', {
    successRedirect: '/member-dashboard',
    failureRedirect: '/member-login',
    failureFlash: true
}))

router.post('/signup', async (req, res) => {
    console.log(req.body);
    try {
        const userData = await Member.create({
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            email: req.body.email,
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