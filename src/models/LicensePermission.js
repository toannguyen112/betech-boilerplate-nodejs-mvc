import Sequelize, { Model } from "sequelize";

class LicensePermission extends Model {
  static init(sequelize) {
    super.init(
      {
        lic_permission_id: {
          allowNull: false,
          unique: true,
          primaryKey: true,
          type: Sequelize.STRING(20),
          field: "lic_permission_id",
        },
        license_id: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },
        lic_permission_name: {
          allowNull: true,
          type: Sequelize.STRING(200),
        },
        usr_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },
        biz_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },
        indi_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },
        indi_consent_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },
        indi_pref_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        prod_cate_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        prod_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        loya_prog_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        loya_curr_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        loya_memb_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        loyal_tier_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        benefit_type_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        tier_rules_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        benefit_type_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        benefit_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        voucher_def_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        voucher_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        loya_promo_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        promo_memb_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        promo_curr_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        promo_prod_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        manual_trx_access: {
          allowNull: true,
          type: Sequelize.BOOLEAN,
        },

        record_owner: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        created_usr: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },
        last_modified_usr: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          field: "created_date",
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          field: "last_modified_date",
        },
      },
      {
        sequelize,
        modelName: "licensesPermission",
        tableName: "license_permissions",
        timestamps: true,
      }
    );

    return this;
  }

  static associate(models) {}
}

export default LicensePermission;
