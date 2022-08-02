"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tenant_user_role_permissions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        field: "t_usrRole_id",
      },

      t_schema_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "tenants",
          key: "t_schema_id",
        },
      },

      t_roleName: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      t_usr_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_biz_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_indi_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_indiConsent_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_indiPref_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_prodCate_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_prod_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_loyaProg_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_loyaCurr_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_loyaMemb_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_loyalTier_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_tierRules_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_benefitType_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_benefit_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_voucherDef_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_voucher_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_loyaPromo_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_promoMemb_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_promoCurr_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_promoProd_access: {
        allowNull: true,
        default: false,
        type: Sequelize.BOOLEAN,
      },

      t_manualTrx_access: {
        allowNull: true,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      t_usr_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      t_usr_created_by: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      t_usr_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValueValue: new Date(),
        field: "t_usr_created_date",
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValueValue: new Date(),
        field: "t_usr_lastModified_date",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tenant_user_role_permissions");
  },
};
