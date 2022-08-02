"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "loyalty_programs",
      [
        {
          t_loyalProg_id: "LOY302iwoD49MDm2c",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          t_loyalProg_name: "WS Loyalty Program 2022",
          t_loyalProg_status: "New",
        },
        {
          t_loyalProg_id: "LOY302iwoD49MDm2c2",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          t_loyalProg_name: "WS Loyalty Program 20221",
          t_loyalProg_status: "New",
        },
        {
          t_loyalProg_id: "LOY302iwoD49MDm2c3",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          t_loyalProg_name: "WS Loyalty Program 20222",
          t_loyalProg_status: "New",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
