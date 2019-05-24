const express = require('express');
const router = express.Router();
const passport = require('passport');
const knex = require('../database/knex');
const Contact = require('../database/models/Contact');
const guard = require('../database/middleware/guard');

// console.log(passport);

router.post('/', passport.authenticate('local'), (req, res) => {
  // console.log(req);
  return res.json({
    id: req.user.id,
    username: req.user.username,
  });
});

module.exports = router;
