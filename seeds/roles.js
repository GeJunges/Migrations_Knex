exports.seed = function (knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('roles').del(),

        // Inserts seed entries
        knex('roles').insert({ code: 1, name: 'admin', description: 'System Admin' }),
        knex('roles').insert({ code: 2, name: 'user', description: 'User' }),
        knex('roles').insert({ code: 3, name: 'guest', description: 'Guest' })
    );
};