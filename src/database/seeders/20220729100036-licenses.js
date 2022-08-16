"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("licenses", [
      {
        license_id: "LICw02rjJWWI384mdD",
        license_name: "Free",
        number_users: 45,
        limit_storage: 1024,
        limit_contact: 100.0,
        limit_msg: 10.0,
        record_owner: "USR202rLJUUI393mMK",

        created_usr: "USR202rLJUUI393mMK",
        last_modified_usr: "USR202rLJUUI393mMK",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("licenses", null, {});
  },
};
