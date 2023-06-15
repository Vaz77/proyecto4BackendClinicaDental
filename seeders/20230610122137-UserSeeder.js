'use strict';

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
return queryInterface.bulkInsert("Users", [
    {
      name: "Adrian",
      surname: "Gonzalbo Ruiz",
      email: "adri@adri.com",
      password: 1235,
      phone: "659851441",
      role_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
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
