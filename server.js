// Imports
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./config/passport');
const flash = require('express-flash');
const Member = require('./models/member.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

initializePassport(
  passport,
  email => {
    return Member.findOne({ where: { email: email } })
    // return users.find(user => user.email === email)
  },
  id => {
    return Member.findOne({ where: { id: id } })
  }
)

const path = require('path');
const express = require('express');
// Rename routes folder to controllers to folloe MVC file structure
const routes = require('./routes');
const exphbs = require('express-handlebars');
// Need a helpers folder
// const helpers = require('./utils');
const sequelize = require('./config/connection');

// Connection between session and sequelize for the use of cookies

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.use(flash());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({ secret: 'supersupersecret', cookie: {}, resave: false, saveUninitialized: true, store: new SequelizeStore({ db: sequelize}) }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});