const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const Contact = require('../database/models/Contact');
const guard = require('../database/middleware/guard');
const bookshelf = require('bookshelf');
const bcrypt = require('bcryptjs');
//require bookshelf

const saltRounds = 12

router.post('/', (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      return 500
    }

    return new userInfo({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
    })
    .save()
    .then(() => {
      this.router.navigate(['/']);
    })
  })
});

module.exports = router;
