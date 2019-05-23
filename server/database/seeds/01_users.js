
const bcrypt = require('bcryptjs');
const saltRounds = 12;

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username: 'BeFlowers', password: bcrypt.hashSync('password', saltRounds), name: 'Brenda Flores', email: 'FloralFlowers@email.com', address: '321 Easy Street', is_admin: false},
        {username: 'HIHegs', password:  bcrypt.hashSync('password'), name: 'Frank Heggeness', email: 'TankMan88@email.com', address: '1155 Buckeye Road', is_admin: false},
        {username: 'ForceWielder30', password: bcrypt.hashSync('password'), name: 'Luke Fiorio', email: 'LightSide4Ever@email.com', address: 'T-34 Tatooine Place', is_admin: false},
        {username: 'RonJohnSilvers', password: bcrypt.hashSync('password'), name: 'Ronald Nagata', email: 'ShiverMeTimbers@email.com', address: 'Port Royal Lane', is_admin: false,},
        {username: 'BrotoMoto', password: bcrypt.hashSync('password'), name: 'Brett Matsumoto', email: 'Duuuude17@email.com', address: '1428 Elm Street', is_admin: true},
        {username: 'DragonSlayer32', password: bcrypt.hashSync('password'), name: 'Brad McKinney', email: 'SlayDay99@email.com', address: '1630 Liholiho Street', is_admin: false}
      ]);
    });
};