import Sequelize, { Model } from "sequelize";

class TenantSub extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          unique: true,
          primaryKey: true,
          type: Sequelize.STRING(20),
          field: "tenant_id",
        },

        org_id: {
          allowNull: false,
          type: Sequelize.STRING(20),
          references: {
            model: "organizations",
            key: "org_id",
          },
        },

        t_license_id: {
          allowNull: true,
          type: Sequelize.STRING(20),
          references: {
            model: "licenses",
            key: "license_id",
          },
        },

        t_schema_id: {
          allowNull: true,
          type: Sequelize.DECIMAL(10, 0),
          references: {
            model: "tenants",
            key: "t_schema_id",
          },
        },

        t_usrCreated: {
          allowNull: true,
          type: Sequelize.STRING(20),
          references: {
            model: "users",
            key: "usr_id",
          },
        },

        t_noUsr: {
          allowNull: true,
          type: Sequelize.DECIMAL(18, 0),
        },

        t_contactUsage: {
          allowNull: true,
          type: Sequelize.DECIMAL(10, 0),
        },

        t_messUsage: {
          allowNull: true,
          type: Sequelize.DECIMAL(10),
        },

        t_activateStatus: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        t_activateStart_date: {
          allowNull: true,
          type: Sequelize.DATE,
        },

        t_activateCancel_date: {
          allowNull: true,
          type: Sequelize.DECIMAL(10),
        },

        t_language: {
          allowNull: true,
          type: Sequelize.STRING(10),
        },

        t_location: {
          allowNull: true,
          type: Sequelize.DECIMAL(10),
        },

        t_purchaseOrder_no: {
          allowNull: true,
          type: Sequelize.STRING(100),
        },

        t_contractNo: {
          allowNull: true,
          type: Sequelize.STRING(100),
        },

        t_contractStart_date: {
          allowNull: true,
          type: Sequelize.DATE,
        },

        t_contractCancel_date: {
          allowNull: true,
          type: Sequelize.DATE,
        },

        t_database_version: {
          allowNull: true,
          type: Sequelize.STRING(10),
        },

        t_app_version: {
          allowNull: true,
          type: Sequelize.STRING(10),
        },

        t_deploymentTime: {
          allowNull: true,
          type: Sequelize.DATE,
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
        timestamps: true,
        tableName: "tenant_subscriptions",
      }
    );

    return this;
  }

  static associate(models) {}
}

export default TenantSub;
