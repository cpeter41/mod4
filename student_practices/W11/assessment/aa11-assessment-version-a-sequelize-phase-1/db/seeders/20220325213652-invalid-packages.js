const { Op } = require('sequelize');

'use strict';

const invalidPackages = [
  {
    trackingNumber: null,
    weightKg: null,
    recipient: null,
    isDelivered: null,
  },
  {
    trackingNumber: '1', // length 1
    weightKg: 1,
    recipient: 'Anonymous',
    isDelivered: null,
  },
  {
    trackingNumber: '987654321', // length 9
    weightKg: 81,
    recipient: 'l33t',
    isDelivered: null,
  },
  {
    trackingNumber: 'ABCabc1230', // length 10
    weightKg: -1,
    recipient: 9876543210,
    isDelivered: null,
  },
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Packages', invalidPackages, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Packages',
      null,
      {
        trackingNumber: {
          [Op.in]: invalidPackages.map(package => package.trackingNumber)
        }
      },
      {}
    );
  }
};
