
exports.up = function (knex, Promise) {
    return knex.schema
        .createTableIfNotExists('phones', function (table) {
            table.increments('id').primary();
            table.uuid('phoneId').defaultTo(knex.raw('uuid_generate_v4()'));
            table.string('number', 10).notNullable();
            table.integer('ddd', 2).notNullable();
            table.integer('userId').notNullable().references('id').inTable('users').onDelete('cascade');
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('phones');
};