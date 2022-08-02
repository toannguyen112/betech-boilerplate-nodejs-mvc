"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("organizations", {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING(200),
        field: "org_id",
      },

      crm_org_id: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },

      crm_contact_id: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      primary_contact_name: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      primary_contact_email: {
        allowNull: true,
        type: Sequelize.STRING(300),
      },

      org_name: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      record_owner: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      created_usr: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      last_modified_usr: {
        allowNull: true,
        type: Sequelize.STRING(200),
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("organizations");
  },
};
