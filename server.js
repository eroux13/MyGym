// Imports
const path = require('path');
const express = require('express');
// Rename routes folder to controllers to folloe MVC file structure
const routes = require('./routes/api');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Need a helpers folder
// const helpers = require('./utils');
const sequelize = require('./config/connection');

// Connection between session and sequelize for the use of cookies
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// Session Variable
const sess = {
  secret: "Something super secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});