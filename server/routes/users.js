const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const User = require('../database/models/User');
const guard = require('../database/middleware/guard');

router.get('/', guard, (req, res) => {
  console.log('id', req.user.id)
  // new User()
  //   .where({ id: req.user.id })
  //   .fetch()
  //   .then((result) => {
  //     console.log(result.toJSON())
  //     const resultObj = result.toJSON();
  //     return res.send(resultObj);
  //   });
});

module.exports = router;
