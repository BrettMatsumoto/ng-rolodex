const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const User = require('../database/models/user');

router.get('/', (req, res) => {
  new User().fetchAll({ withRelated: ['contacts'] }).then((results) => {
    let resultsObj = results.toJSON();

    return res.send(resultsObj);
  });
});

module.exports = router;
