'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Services', [
      {
        name: 'Extraccion',
        price: '65',
        duration: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ortodoncia',
        price: '1000',
        duration: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Implantologia',
        price: '60',
        duration: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Estetica dental',
        price: '95',
        duration: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Odontopediatría',
        price: '100',
        duration: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Periodoncia',
        price: '80',
        duration: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Endodoncia',
        price: '90',
        duration: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Protesis Dental',
        price: '2000',
        duration: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cirugia',
        price: '100',
        duration: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Services', null, {});
  }
};
