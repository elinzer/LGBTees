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
        name: 'They/Them',
        url: 'https://www.atribecalledqueer.org/product-page/they-them-t-shirt',
        userId: 1,
        price: 30.00,
        brand: 'A Tribe Called Queer',
        brandUrl: 'https://www.atribecalledqueer.org/',
        imageUrl: 'https://static.wixstatic.com/media/ccb29d_4ba84d6cfd4b457290738d6494a52af8~mv2.jpg/v1/fill/w_550,h_550,al_c,q_85,usm_0.66_1.00_0.01/ccb29d_4ba84d6cfd4b457290738d6494a52af8~mv2.webp',
      },
      {
        name: 'Watch Me Grow',
        url: 'https://www.awarewolfapparel.com/products/watch-me-grow',
        userId: 1,
        price: 29.99,
        brand: 'Awarewolf Apparel',
        brandUrl: 'https://www.awarewolfapparel.com/',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1494/9378/products/WATCHMEGROW_720x.png?v=1647911768',
      },
      {
        name: 'We Are Everywhere',
        url: 'https://thelittlegayshop.com/collections/shirts/products/we-are-everywhere-shirt',
        userId: 1,
        price: 30.00,
        brand: 'The Little Gay Shop',
        brandUrl: 'https://thelittlegayshop.com/',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0265/9080/6076/products/WeAreEverywhere_1024x1024@2x.jpg?v=1655765292',
      },
      {
        name: 'Gal Pal',
        url: 'https://www.hellomerch.com/collections/autostraddle/products/gal-pal-black-tee',
        userId: 1,
        price: 26.00,
        brand: 'Autostraddle',
        brandUrl: 'https://www.autostraddle.com/',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0015/2602/products/AUTOSTRADDLE_GALPAL_BLACK_TSHIRT.jpg?v=1571262777',
      },
      {
        name: 'Gender Is An Illusion',
        url: 'https://www.atribecalledqueer.org/product-page/gender-is-an-illusion-t-shirt',
        userId: 1,
        price: 30.00,
        brand: 'A Tribe Called Queer',
        brandUrl: 'https://www.atribecalledqueer.org/',
        imageUrl: 'https://static.wixstatic.com/media/ccb29d_adc9631b1106402aabe3991b4dad7a04~mv2.jpg/v1/fill/w_550,h_550,al_c,q_85,usm_0.66_1.00_0.01/ccb29d_adc9631b1106402aabe3991b4dad7a04~mv2.webp',
      },
      {
        name: 'Be Yourself Anyway',
        url: 'https://transfigureprintco.com/shop/be-yourself-anyway-shirt-y74ct',
        userId: 1,
        price: 25.00,
        brand: 'Transfigure Print Co.',
        brandUrl: 'https://transfigureprintco.com/',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5d0c51d9de0717000158d294/1673022161489-6H8AWZZK0Q3W1H4EILPC/byamaroon.png?format=1500w',
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
