exports.up = function(knex, Promise) {
  return knex.schema.createTable('Contacts', (table) => {
    table.increments('id').notNull();
    table.string('name').notNull();
    table.timestamps(true, true).notNull();
    table.string('address');
    table.string('mobile');
    table.string('work');
    table.string('home');
    table.string('twitter');
    table.string('instagram');
    table.string('github');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Contacts');
};
