import Sequelize, { Model } from "sequelize";
import ProductCategory from "../models/ProductCategory";

export default class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        t_prod_id: {
          type: Sequelize.STRING(20),
          primaryKey: true,
          field: "t_prod_id",
        },
        t_prod_prodCate_id: Sequelize.INTEGER,
        t_prod_name: Sequelize.STRING,
        t_prod_sku: Sequelize.STRING,
        t_prod_code: Sequelize.STRING,
        t_prod_gender: Sequelize.STRING,
        t_prod_color: Sequelize.STRING,
        t_prod_price: Sequelize.NUMBER,
        t_prod_imgURL: Sequelize.STRING,
        t_prod_created_date: Sequelize.DATE,
        t_prod_lastModified_date: Sequelize.DATE,
      },
      {
        sequelize,
        timestamps: false,
        tableName: "products",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(ProductCategory, {
      as: "category",
      foreignKey: "prod_cate_id",
    });
  }

  static async list(models) {
    let products = await Product.findAll({
      order: [["prod_cate_id", "DESC"]],
      include: [{ model: ProductCategory, as: "category" }],
    });

    products = products.map((item) => item.transform());

    return products;
  }

  transform() {
    return {
      name: this.t_prod_name,
      sku: this.t_prod_sku,
      code: this.t_prod_code,
      gender: this.t_prod_gender,
      price: this.t_prod_price,
      image_url: this.t_prod_imgURL,
      category: this.category,
    };
  }
}
