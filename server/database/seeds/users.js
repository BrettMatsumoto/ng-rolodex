
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('Users').insert([
        {username: 'BeFlowers', name: 'Brenda Flores', email: 'FloralFlowers@email.com', address: '321 Easy Street'},
        {username: 'HIHegs', name: 'Frank Heggeness', email: 'TankMan88@email.com', address: '1155 Buckeye Road'},
        {username: 'ForceWielder30', name: 'Luke Fiorio', email: 'LightSide4Ever@email.com', address: 'T-34 Tatooine Place'},
        {username: 'RonJohnSilvers', name: 'Ronald Nagata', email: 'ShiverMeTimbers@email.com', address: 'Port Royal Lane'},
        {username: 'BrotoMoto', name: 'Brett Matsumoto', email: 'Duuuude17@email.com', address: '1428 Elm Street'},
        {username: 'DragonSlayer32', name: 'Brad McKinney', email: 'SlayDay99@email.com', address: '1630 Liholiho Street'}
      ]);
    });
};