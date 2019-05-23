exports.up = function(knex, Promise) {
  return knex.schema.table('contacts', (table) => {
    table
      .integer('created_by')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
