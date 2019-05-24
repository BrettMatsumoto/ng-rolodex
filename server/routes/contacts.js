const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const Contact = require('../database/models/Contact');
const guard = require('../database/middleware/guard');

router.get('/', (req, res) => {
  // console.log('contacts req', req.user)
  new Contact().where({ created_by: req.user.id }).fetchAll().then((result) => {
    const resultObj = result.toJSON()
    return res.send(resultObj);
  });
});

router.get('/search/:id', (req, res) => {
  // console.log(req.body);
  new Contact({ name: req.params.id })
  .fetch()
})

module.exports = router;
