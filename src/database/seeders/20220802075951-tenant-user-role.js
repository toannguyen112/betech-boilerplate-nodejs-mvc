"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tenant_user_role_permissions",
      [
        {
          t_usrRole_id: "TRO302iwoD49MDm2c",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          t_roleName: "Loyalty Manager",
          t_usr_access: true,
          t_prod_access: true,
          t_loyaProg_access: true,
        },
        {
          t_usrRole_id: "TRO302iwoD49MDm2c2",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          t_roleName: "Promotion Managerr",
          t_usr_access: true,
          t_prod_access: true,
          t_loyaProg_access: true,
          t_benefit_access: true,
        },
        {
          t_usrRole_id: "TRO302iwoD49MDm2c3",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          t_roleName: "Data Manager",
          t_usr_access: true,
          t_prod_access: true,
          t_loyaProg_access: true,
          t_voucherDef_access: true,
        },
        {
          t_usrRole_id: "TRO302iwoD49MDm2c4",
          t_schema_id: "SCHi203AmrjKMWL38k0F1",
          t_roleName: "Service Agent",
          t_usr_access: true,
          t_prod_access: true,
          t_loyaProg_access: true,
          t_voucher_access: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tenant_user_role_permissions", null, {});
  },
};
