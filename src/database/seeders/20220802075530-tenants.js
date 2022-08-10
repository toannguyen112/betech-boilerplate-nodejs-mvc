"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    const { faker } = require("@faker-js/faker");
    await queryInterface.bulkInsert("tenants", [
      {
        t_schema_id: `SCHjww9ud21p1`,
        t_schName: faker.name.firstName(),
        t_schStart_date: faker.datatype.datetime(),
        t_schEnd_date: faker.datatype.datetime(),
        t_sch_recordOwner: "USR202rLJUUI393mMK",
        t_sch_lastModified_by: "USR202rLJUUI393mMK",
        t_sch_created_by: "USR202rLJUUI393mMK",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tenants", null, {});
  },
};
