'use strict';

const { Entree } = require('../models');

const entrees = [
  {
    name: "John's Impossible Burger",
    description: "Plant-based yumminess on a bun with brown-ale mustard",
    price: 10.34,
  },
  {
    name: "Chicken Noodle Soup",
    description: "Warm and hearthy soup with chicken and egg noodles",
    price: 8.99,
  },
  {
    name: "Caesar Salad",
    description: "Lettuce salad with caesar dressing and tomatoes",
    price: 8.99,
  },
  {
    name: "Steak Frites",
    description: "Tender steak with french fries on the side",
    price: 21.50,
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    await Entree.bulkCreate(entrees, { validate: true });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entrees', {
      name: entrees.map(entree => entree.name)
    }, {});
  }
};
