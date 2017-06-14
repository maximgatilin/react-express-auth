const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

// connect to database and load models
require('./server/models').connect(config.dbUri);

const app = express();

// Static files
app.use(express.static(path.join(__dirname, 'client/dist')));

// View engine
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

// Tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// Pass the passport middleware
app.use(passport.initialize());

// Load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// Pass the authentication checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const routes = require('./server/routes');
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/', routes);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000')
});