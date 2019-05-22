exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('password').notNull();
    table.boolean('is_admin').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
