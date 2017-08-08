
exports.up = function (knex, Promise) {
    return knex.schema
        .createTableIfNotExists('addressTypes', function (table) {
            table.increments('id').primary();
            table.uuid('addressTypeId').defaultTo(knex.raw('uuid_generate_v4()'));
            table.integer('code').notNullable().unique();
            table.string('name', 50).notNullable().unique();
            table.string('description', 255).notNullable();
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('addressTypes');
};
