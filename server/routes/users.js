const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const User = require('../database/models/User');
const guard = require('../database/middleware/guard');

router.get('/', (req, res) => {
  console.log('hits routes/user', req.user.id)
  new User()
    .where({ id: req.user.id })
    .fetchAll()
    .then((result) => {
      const resultObj = result.toJSON();
      return res.send(resultObj);
    })
});

module.exports = router;
