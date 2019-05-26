const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const Contact = require('../database/models/Contact');
const guard = require('../database/middleware/guard');

router.get('/', guard, (req, res) => {
  // console.log('contacts req', req.user)
  new Contact()
    .where({ created_by: req.user.id })
    .fetchAll()
    .then((result) => {
      const resultObj = result.toJSON();
      return res.send(resultObj);
    });
});

router.get('/:id', guard, (req, res) => {
  new Contact({ name: req.params.id }).fetch();
});

router.get('/search/:id', (req, res) => {
  console.log('server side',req.body.name)
  new Contact()
    .where({ created_by: req.user.id })
    .fetchAll()
    .then((result) => {
      const resultObj = result.toJSON();
      console.log('back from tables', resultObj);
      return res.send(resultObj);
    });
});

router.post('/', guard, (req, res) => {
  console.log('hits contact route', req.body);
  new Contact({
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    twitter: req.body.email,
    instagram: req.body.instagram,
    github: req.body.github,
    created_by: req.user.id,
  })
    .save()
    .then((contact) => {
      return res.json({ contact });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete('/:id', guard, (req, res) => {
  // console.log('hits backend router', req.body);
  // console.log('hits backend route', req.params.id)
  new Contact({ id: req.params.id }).destroy().then(() => {
    new Contact()
      .where({ created_by: req.user.id })
      .fetchAll()
      .then((result) => {
        const resultObj = result.toJSON();
        return res.send(resultObj);
      });
  });
});

router.put('/:id', guard, (req, res) => {
  const body = req.body;
  console.log('server route', body);
  new Contact({ id: req.params.id })
    .save({
      name: body.name,
      address: body.address,
      mobile: body.mobile,
      work: body.work,
      home: body.home,
      email: body.email,
      twitter: body.twitter,
      instagram: body.instagram,
      github: body.github,
    })
    .then((result) => {
      let resultObj = result;
      return res.send(resultObj);
    });
});

module.exports = router;
