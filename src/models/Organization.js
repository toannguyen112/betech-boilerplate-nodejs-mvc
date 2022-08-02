import Sequelize, { Model } from "sequelize";

export default class Organization extends Model {
  static init(sequelize) {
    super.init(
      {
        org_id: {
          type: Sequelize.STRING(20),
          primaryKey: true,
          field: "org_id",
        },
        crm_org_id: Sequelize.STRING(20),
        crm_contact_id: Sequelize.STRING(20),
        primary_contact_name: Sequelize.STRING(200),
        primary_contact_email: Sequelize.STRING(300),
        org_name: Sequelize.STRING(200),
        record_owner: Sequelize.STRING(20),
        created_usr: Sequelize.STRING(20),
        last_modified_usr: Sequelize.DATE,
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
        modelName: "Organization",
        tableName: "organizations",
        timestamps: true,
      }
    );

    return this;
  }
}
