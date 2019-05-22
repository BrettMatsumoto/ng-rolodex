const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const User = require('../database/models/user');
const guard = require('../database/middleware/guard');

router.get('/', guard, (req, res) => {
  new User().fetchAll().then((result) => {
    return res.send(result.toJSON());
  });
});

module.exports = router;
