module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "vouchers",
          "t_vouchr_vchDefId",
          {
            allowNull: true,
            type: Sequelize.STRING(200),
            references: {
              model: "voucher_definitions",
              key: "t_vouchrDef_id",
            },
          },

          { transaction: t }
        ),
        queryInterface.addColumn(
          "vouchers",
          "t_vouchr_benfId",
          {
            allowNull: true,
            type: Sequelize.STRING(200),
            references: {
              model: "benefits",
              key: "t_benf_id",
            },
          },

          { transaction: t }
        ),
        queryInterface.addColumn(
          "vouchers",
          "t_vouchr_loyaPromId",
          {
            allowNull: true,
            type: Sequelize.STRING(200),
            references: {
              model: "loyalty_promotions",
              key: "t_loyaPrm_id",
            },
          },

          { transaction: t }
        ),
        queryInterface.addColumn(
          "vouchers",
          "t_vouchr_loyaProgId",
          {
            allowNull: true,
            type: Sequelize.STRING(200),
            references: {
              model: "loyalty_programs",
              key: "t_loyalProg_id",
            },
          },

          { transaction: t }
        ),
        queryInterface.addColumn(
          "vouchers",
          "t_vouchr_loyaMemId",
          {
            allowNull: true,
            type: Sequelize.STRING(200),
            references: {
              model: "loyalty_members",
              key: "t_loyalMem_id",
            },
          },

          { transaction: t }
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.removeColumn("vouchers", "t_usrRole_id", { transaction: t })]);
    });
  },
};
