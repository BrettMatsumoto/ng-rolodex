const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');
const cookieParser = require('cookie-parser');
const redis = require('connect-redis')(session);

const saltRounds = 12;

const userRoute = require('./routes/users');
const contactRoute = require('./routes/contacts');
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
        return new userRoute({ username:username })
        .fetch()
        .then((user) => {
            if (user === null) {
                
            }
        })
    })
)

const server = app.listen(PORT, () => {
  console.log(`Express app is running at port ${PORT}`);
});
