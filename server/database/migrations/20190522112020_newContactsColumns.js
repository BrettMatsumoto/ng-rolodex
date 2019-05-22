exports.up = function(knex, Promise) {
  return knex.schema.table('contacts', (table) => {
    table.string('created_by').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
