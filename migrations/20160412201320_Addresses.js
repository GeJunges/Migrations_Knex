
exports.up = function (knex, Promise) {
    return knex.schema
        .createTableIfNotExists('adresses', function (table) {
            table.increments('id').primary();
            table.uuid('addressId').defaultTo(knex.raw('uuid_generate_v4()'));
            table.string('street', 60).notNullable();
            table.integer('number', 10);
            table.string('district', 60);
            table.integer('typeId').notNullable().references('code').inTable('addressTypes');
            table.integer('userId').notNullable().references('id').inTable('users').onDelete('cascade');
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('adresses');
};
