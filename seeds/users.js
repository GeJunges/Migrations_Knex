
exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      firstName: 'Admin',
      lastName: 'Admin',
      password: '$2a$10$wxN9MrZZxbIeNzNtxC2f7OXLeVEwbaxRpwlNMnAOItytSMFuJhULO',
      email: 'test@gmail.com',
      cpfCnpj: '123456789',
      roleId: 1
    })
  );
};
