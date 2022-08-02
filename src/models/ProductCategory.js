import Sequelize, { Model } from "sequelize";
import Product from "./Product";

class ProductCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        t_prodCate_name: Sequelize.STRING,
        t_prodCate_code: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: "product_categories",
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Product, {
      as: "products",
      foreignKey: "t_prod_prodCate",
    });
  }

  static async list() {
    let categories = await ProductCategory.findAll({
      order: [["id", "DESC"]],
      include: [{ model: Product, as: "products" }],
    });

    categories = categories.map((item) => item.transform());
  }

  transform() {
    return {
      category_name: this.t_prodCate_name,
      products: this.products.map((item) => item.transform()),
      sku: this.t_prodCate_code,
    };
  }
}

export default ProductCategory;
