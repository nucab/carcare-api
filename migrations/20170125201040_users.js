
exports.up = function(knex, Promise) {
  // return knex.schema.createTable('users', function(table){
  //   table.increments();
  //   table.string('username').notNullable().unique();
  //   table.string('username').notNullable().unique();
  //
  // });
  return knex.raw(`
    CREATE TABLE users (
      id int(11) NOT NULL,
      firstname varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      lastname varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      username varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      email varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      password varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
      timezone varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
  `);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
