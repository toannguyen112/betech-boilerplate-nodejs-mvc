"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tenant_ref_tenant_user_roles",
      [
        {
          t_usr_id: "TURa432AiesKKKL3200F1",
          t_usrRole_id: "TRO302iwoD49MDm2c",
        },
        {
          t_usr_id: "TURa432AiesKKKL3200F1",
          t_usrRole_id: "TRO302iwoD49MDm2c2",
        },
        {
          t_usr_id: "TURa432AiesKKKL3200F1",
          t_usrRole_id: "TRO302iwoD49MDm2c3",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tenant_ref_tenant_user_roles", null, {});
  },
};
