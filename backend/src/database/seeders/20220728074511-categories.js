"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_categories",
      [
        {
          t_prodCate_id: "prod_cate_id_1",
          t_prodCate_code: "code 1",
        },
        {
          t_prodCate_id: "prod_cate_id_2",
          t_prodCate_code: "code 1",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
