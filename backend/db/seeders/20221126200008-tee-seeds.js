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
        url: 'https://www.flavnt.com/clothing/ptf-largeprint',
        userId: 1,
        price: 29.99,
        brand: 'Flavnt',
        brandUrl: 'https://www.flavnt.com/',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/54b96f75e4b076c29fbb5eda/1609439822392-DSM6GQQR3N7R5KEMB5ZW/ptfflat1.jpg',
      },
      {
        name: 'Thank You For Existing',
        url: 'https://transfigureprintco.com/shop/thank-you-for-existing-shirt',
        userId: 1,
        price: 30.00,
        brand: 'Transfigure Print Co.',
        brandUrl: 'https://transfigureprintco.com/',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5d0c51d9de0717000158d294/1657737430375-ZOL40BANQDPE268E1UGX/thankyouforexistingshirt.png',
      },
      {
        name: "Who All's Gay Here",
        url: 'https://www.hellomerch.com/collections/autostraddle/products/who-all-s-gay-here-tie-dye-tee',
        userId: 1,
        price: 26.00,
        brand: 'Autostraddle',
        brandUrl: 'https://www.autostraddle.com/',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0015/2602/products/Whoall_sgayheremain.png?v=1639425855',
      },
      {
        name: 'Grow At Your Own Pace',
        url: 'https://www.flavnt.com/clothing/grow-graphic-tee',
        userId: 1,
        price: 29.99,
        brand: 'Flavnt',
        brandUrl: 'https://www.flavnt.com/',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/54b96f75e4b076c29fbb5eda/1590439645342-EJE63TRNQ86MB6KTHTQO/grow-text-white_mockup_Front_Wrinkled_Oxblood-Black+copy.jpg',
      },
      {
        name: 'Alphabet Mafia',
        url: 'https://www.awarewolfapparel.com/products/alphabet-mafia',
        userId: 1,
        price: 19.99,
        brand: 'Awarewolf Apparel',
        brandUrl: 'https://www.awarewolfapparel.com/',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1494/9378/products/mafi_gold_1728x.png',
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
    const Op = Sequelize.Op;
    options.tableName = 'Tees';
    await queryInterface.bulkDelete(options, { name: { [Op.in]: ['Protect Trans Folks', 'Thank You For Existing', "Who All's Gay Here", 'Grow At Your Own Pace', 'Alphabet Mafia'] } }, {});
  }
};
