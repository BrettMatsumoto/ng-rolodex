
exports.seed = function(knex, Promise) {
  return knex('contacts').del()
    .then(function () {
      return knex('contacts').insert([
        {name: 'Brenda Flores', address: '321 Easy Street', mobile: '666-8622', work: '666-8622', home: '666-8622', email: 'FloralFlowers@email.com', twitter: '@Brlores', instagram: 'Brendio', github: 'Brender', created_by: 2},
        {name: 'Frank Heggeness', address: '1155 Buckeye Road', mobile: '826-5686', work: '826-5686', home: '826-5686', email: 'TankMan88@email.com', twitter: '@Frankness', instagram: 'Franker', github: 'Frankio', created_by: 3},
        {name: 'Luke Fiorio', address: 'T-34 Tatooine Place', mobile: '367-2342', work: '367-2342', home: '367-2342', email: 'LightSide4Ever@email.com', twitter: '@Filuke', instagram: 'Lurio', github: 'Fiorius', created_by: 4},
        {name: 'Ronald Nagata', address: 'Port Royal Lane', mobile: '965-3725', work: '965-3725', home: '965-3725', email: 'ShiverMeTimbers@email.com', twitter: '@Naganald', instagram: 'Nagateo', github: 'Nagator', created_by: 5},
        {name: 'Brett Matsumoto', address: '1428 Elm Street', mobile: '668-6626', work: '668-6626', home: '668-6626', email: 'Duuuude17@email.com', twitter: '@Brettoro', instagram: 'Brettus', github: 'Bretter', created_by: 6},
        {name: 'Brad McKinney', address: '1630 Liholiho Street', mobile: '729-7692', work: '729-7692', home: '729-7692', email: 'SlayDay99@email.com', twitter: '@Mckibad', instagram: 'Brackinney', github: 'Bradieo', created_by: 1}
      ]);
    });
};
