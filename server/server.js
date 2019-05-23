const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');
const cookieParser = require('cookie-parser');
const redis = require('connect-redis')(session);

const saltRounds = 12;
const usersRoute = require('./routes/users');
const contactsRoute = require('./routes/contacts');
require('dotenv').config();

const PORT = process.env.EXPRESS_CONTAINER_PORT;

const app = express();
app.use(bodyParser.json());
app.use(
  session({
    store: new redis({ url: process.env.REDIS_URL }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function(username, password, done) {
    return new userRoute({ username: username })
      .fetch()
      .then((user) => {
        if (user === null) {
          return done(null, false, { message: 'Incorrect login Credentials' });
        } else {
          user = user.toJSON();
          bcrypt.compare(password, user.password).then((res) => {
            if (res) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Incorrect login Credentials' });
            }
          });
        }
      })
      .catch((err) => {
        return done(err);
      });
  }),
);

passport.serializeUser(function(user, done) {
  return done(null, { id: user.id, username: user.username });
});

passport.deserializeUser(function(user, done) {
  return new User({ id: user.id }).fetch().then((user) => {
    user = user.toJSON();
    done(null, {
      id: user.id,
      username: user.username,
      role_id: user.role_id,
    });
  });
});

app.use('/api/users', usersRoute);
app.use('/api/contacts', contactsRoute);

app.post('/api/register', (req, res) => {
  return res.json({ status: 'ok' });
});

app.post('/api/register', (req, res) => {
  return res.json({ status: 'ok' });
});

app.get('/api/logout', (req, res) => {
  return res.json({ status: 'ok' });
});

const server = app.listen(PORT, () => {
  console.log(`Express app is running at port ${PORT}`);
});
