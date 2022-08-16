"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("organizations", [
      {
        org_id: "ORGw002ukJEWI83eiK",
        crm_org_id: "0011s000008FhKzAAK",
        crm_contact_id: "0031s000003UJZyAAO",
        primary_contact_name: "Ta Quang Tuyen",
        primary_contact_email: "tuyenta@whitespace.vn",
        org_name: "Công ty Cổ Phần Không Gian Trắng",
        record_owner: "USR202rLJUUI393mMK",
        created_usr: "USR202rLJUUI393mMK",
        last_modified_usr: "USR202rLJUUI393mMK",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("organizations", null, {});
  },
};
