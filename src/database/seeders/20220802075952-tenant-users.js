"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tenant_users",
      [
        {
          t_usr_id: "TURa432AiesKKKL3200F1",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          // t_usrRole_id: "TRO302iwoD49MDm2c",

          t_usr_Phone: "086 754 0063",
          t_usr_name: "Ta Quang Tuyen",
          t_usr_usrName: "Ta Quang Tuyen",
          t_usr_usrName: "QFdzcDEyMzQ11",
        },
        {
          t_usr_id: "TURa432AiesKKKL3200F2",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          // t_usrRole_id: "TRO302iwoD49MDm2c",

          t_usr_Phone: "086 754 0063",
          t_usr_name: "Ta Quang Tuyen",
          t_usr_usrName: "Ta Quang Tuyen",
          t_usr_usrName: "QFdzcDEyMzQ12",
        },
        {
          t_usr_id: "TURa432AiesKKKL3200F3",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          // t_usrRole_id: "TRO302iwoD49MDm2c",

          t_usr_Phone: "086 754 0063",
          t_usr_name: "Ta Quang Tuyen",
          t_usr_usrName: "Ta Quang Tuyen",
          t_usr_usrName: "QFdzcDEyMzQ13",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tenant_users", null, {});
  },
};
