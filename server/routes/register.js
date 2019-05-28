const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const Contact = require('../database/models/Contact');
const guard = require('../database/middleware/guard');
const bookshelf = require('bookshelf');
const bcrypt = require('bcryptjs');
const User = require('../database/models/User');
//require bookshelf

const saltRounds = 12;

router.post('/', (req, res) => {
  // console.log('server register route: ',req);
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      return 500;
    }

    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        return 500;
      }
      return new User({
        username: req.body.username,
        password: hash,
      })
        .save()
        .then(() => {
          return res.send({ status: 'ok' });
        })
        .catch((err) => {
          return res.send('Error Creating Account');
        });
    });
  });
});

module.exports = router;
