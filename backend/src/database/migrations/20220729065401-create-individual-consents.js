"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("individual_consents", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(200),
        field: "t_indCons_id",
      },

      t_ind_id: {
        allowNull: false,
        type: Sequelize.STRING(200),
        references: {
          model: "individuals",
          key: "t_ind_id",
        },
      },

      t_indCons_name: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },

      t_indCons_consent: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_indCons_email: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_indCons_sms: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_indCons_app: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_indCons_web: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      t_indCons_fbmess: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      // timestamp
      t_indCons_recordOwner: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      t_indCons_created_by: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_indCons_created_date",
      },

      t_indCons_lastModified_by: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        field: "t_indCons_lastModified_date",
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("individual_consents"),
};
