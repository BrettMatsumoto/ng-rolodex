const express = require('express');
const router = express.Router();
const knex = require('../database/knex');
const User = require('../database/models/user');

router('/').get((req, res) => {
  new User()
    .fetchAll()
    .then((results) => {
      let resultsObj = results.toJSON();

      return res.send(resultsObj);
    })
    .put((req, res) => {
      const body = req.body;
      new User({ id: body.id })
        .save({
          username: body.username,
          name: body.name,
          email: body.email,
          address: body.address,
        })
        .then(() => {
          new Card({ id: body.id })
            .fetch({ withRelated: ['contacts'] })
            .then((results) => {
              return res.json(results);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    });
});

module.exports = router;
