"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "licenses",
      [
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
        {
          license_id: "LICw02rjJWWI384mdD2",
          license_name: "Standard",
          number_users: 45,
          limit_storage: 1024,
          limit_contact: 100.0,
          limit_msg: 10.0,
          record_owner: "USR202rLJUUI393mMK",

          created_usr: "USR202rLJUUI393mMK",
          last_modified_usr: "USR202rLJUUI393mMK",
        },
        {
          license_id: "LICw02rjJWWI384mdD3",
          license_name: "Business",
          number_users: 45,
          limit_storage: 1024,
          limit_contact: 100.0,
          limit_msg: 10.0,
          record_owner: "USR202rLJUUI393mMK",

          created_usr: "USR202rLJUUI393mMK",
          last_modified_usr: "USR202rLJUUI393mMK",
        },
        {
          license_id: "LICw02rjJWWI384mdD4",
          license_name: "Enterprise",
          number_users: 45,
          limit_storage: 1024,
          limit_contact: 100.0,
          limit_msg: 10.0,
          record_owner: "USR202rLJUUI393mMK",

          created_usr: "USR202rLJUUI393mMK",
          last_modified_usr: "USR202rLJUUI393mMK",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("licenses", null, {});
  },
};
