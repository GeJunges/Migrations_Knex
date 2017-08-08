exports.up = function (knex, Promise) {
    return knex.schema
        .createTableIfNotExists('users', function (table) {
            table.increments('id').primary();
            table.uuid('userId').defaultTo(knex.raw('uuid_generate_v4()'));
            table.string('firstName', 100).notNullable();
            table.string('lastName', 100).notNullable();
            table.string('password', 255);
            table.string('email', 120).notNullable().unique();
            table.string('cpfCnpj', 14);
            table.string('facebookId', 255);
            table.string('googleId', 255);
            table.string('pictureUrl', 255);
            table.integer('roleId').notNullable().references('code').inTable('roles');
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('users');
};
