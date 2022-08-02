"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tenants",
      [
        {
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          t_schName: "White Space 20220418-000001",
        },
        {
          t_schema_id: "SCHi203AmrjKMWL38k0F2",
          t_schName: "White Space 20220418-000001",
        },
        {
          t_schema_id: "SCHi203AmrjKMWL38k0F3",
          t_schName: "White Space 20220418-000001",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tenants", null, {});
  },
};
