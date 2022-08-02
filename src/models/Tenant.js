import Sequelize, { Model } from "sequelize";

class Tenant extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING(20),
          field: "t_schema_id",
        },

        t_schName: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        t_schStart_date: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        t_schEnd_date: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        t_sch_recordOwner: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        t_sch_created_by: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        t_sch_lastModified_by: {
          allowNull: true,
          type: Sequelize.STRING(20),
        },

        createdAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          field: "t_sch_created_date",
        },

        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          field: "t_sch_lastModified_date",
        },
      },
      {
        sequelize,
        timestamps: true,
        tableName: "tenants",
      }
    );

    return this;
  }

  static associate(models) {}
}

export default Tenant;
