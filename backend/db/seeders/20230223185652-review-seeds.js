'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        teeId: 1,
        stars: 5,
        review: 'This is a great tee!'
      },
      {
        userId: 2,
        teeId: 9,
        stars: 4,
        review: 'I really love the message of this tee!'
      },
      {
        userId: 3,
        teeId: 5,
        stars: 5,
        review: 'So comfy, and I love having my pronouns displayed clearly for everyone to see'
      },
      {
        userId: 3,
        teeId: 8,
        stars: 5,
        review: 'Love this tee. IYKYK'
      },
      {
        userId: 4,
        teeId: 1,
        stars: 5,
        review: 'Cute 8-bit design, and I love the message'
      },
      {
        userId: 2,
        teeId: 3,
        stars: 4,
        review: "Can I still wear this if I'm not from Texas?"
      },
      {
        userId: 2,
        teeId: 2,
        stars: 5,
        review: 'Love this positive message'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op;
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7] }
    });
  }
};
