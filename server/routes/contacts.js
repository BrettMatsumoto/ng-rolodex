const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const Contact = require('../database/models/contact');
const guard = require('../database/middleware/guard');

router.get('/', guard, (req, res) => {
  new Contact().fetchAll().then((result) => {
    return res.send(result.toJSON());
  });
});
module.exports = router;
