'use strict';

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        username: 'AdminUser',
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'DemoUser',
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'FakeUser1',
        firstName: 'Fake1',
        lastName: 'User',
        email: 'fakeuser1@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'Spidey',
        firstName: 'Peter',
        lastName: 'Parker',
        email: 'spiderman@user.io',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op;
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options, { username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'Spidey'] } }, {});
  }
};
