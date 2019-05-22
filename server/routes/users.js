const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const User = require('../database/models/user');

router('/', (req, res) => {
  new User()
    .where({ id: req.params.id })
    .fetchAll()
    .then((results) => {
      return res.send(results.toJSON());
    });
});

module.exports = router;
