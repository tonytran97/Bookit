 Updated upstream
 main
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
 Database

// Create a new sequelize store using the express-session package

 main
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

 Database
// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
=======
const sess = {
  secret: process.env.SESSION_SECRET,
 main
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

 Database
// Add express-session and store as Express.js middleware
 main
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
 Database
  app.listen(PORT, () => console.log('Now listening'));
});
 Stashed changes
=======
  app.listen(PORT, () => console.log(`Now listening, running on port ${PORT}`));
});
 main
