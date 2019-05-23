const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const Contact = require('../database/models/Contact');
const guard = require('../database/middleware/guard');
//require bookshelf

router.post('/api/register', (req, res) => {
  return res.json({ status: 'ok' });
});

module.exports = router;
