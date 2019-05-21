exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.incremends('id');
    table.string('username').unique();
    table.timestamps(true, true).notNull();
    table.string('name');
    table.string('email');
    table.string('address');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
