import Sequelize, { Model } from "sequelize";

class License extends Model {
  static init(sequelize) {
    super.init(
      {
        license_id: {
          type: Sequelize.STRING(20),
          primaryKey: true,
          field: "license_id",
        },

        license_name: Sequelize.STRING(100),
        number_users: Sequelize.DECIMAL(3, 0),
        limit_storage: Sequelize.DECIMAL(10, 0),
        limit_contact: Sequelize.DECIMAL(10, 0),
        limit_msg: Sequelize.DECIMAL(10),
        record_owner: Sequelize.STRING(20),

        created_usr: Sequelize.STRING(20),
        last_modified_usr: Sequelize.STRING(20),
        createdAt: {
          type: Sequelize.DATE,
          field: "created_date",
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "last_modified_date",
        },
      },
      {
        sequelize,
        modelName: "license",
        tableName: "licenses",
        timestamps: true,
      }
    );

    return this;
  }

  static associate(models) {}
}

export default License;
