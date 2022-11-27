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

    await queryInterface.bulkInsert('Tees', [
      {
        name: 'Protect Trans Folks',
        url: 'https://images.squarespace-cdn.com/content/v1/54b96f75e4b076c29fbb5eda/1609439822392-DSM6GQQR3N7R5KEMB5ZW/ptfflat1.jpg',
        userId: 1,
        price: 29.99
      },
      {
        name: 'Protect Trans Folks',
        url: 'https://images.squarespace-cdn.com/content/v1/54b96f75e4b076c29fbb5eda/1609439822392-DSM6GQQR3N7R5KEMB5ZW/ptfflat1.jpg',
        userId: 1,
        price: 29.99
      },
      {
        name: 'Protect Trans Folks',
        url: 'https://images.squarespace-cdn.com/content/v1/54b96f75e4b076c29fbb5eda/1609439822392-DSM6GQQR3N7R5KEMB5ZW/ptfflat1.jpg',
        userId: 1,
        price: 29.99
      },
      {
        name: 'Protect Trans Folks',
        url: 'https://images.squarespace-cdn.com/content/v1/54b96f75e4b076c29fbb5eda/1609439822392-DSM6GQQR3N7R5KEMB5ZW/ptfflat1.jpg',
        userId: 1,
        price: 29.99
      },
      {
        name: 'Protect Trans Folks',
        url: 'https://images.squarespace-cdn.com/content/v1/54b96f75e4b076c29fbb5eda/1609439822392-DSM6GQQR3N7R5KEMB5ZW/ptfflat1.jpg',
        userId: 1,
        price: 29.99
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
