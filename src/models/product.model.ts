import { Table, Column, Model, CreatedAt, UpdatedAt, BelongsTo, ForeignKey } from "sequelize-typescript";
import ProductCategory from "./product_category.model";

@Table({
    tableName: "products",
    timestamps: true,
})

export default class Product extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: false,
    })
    t_prod_id?: string;

    @ForeignKey(() => ProductCategory)
    @Column
    t_prod_prodCate_id?: string;

    @Column
    t_loyalProg_id?: string;

    @Column
    t_schema_id?: string;

    @Column
    t_prod_name?: string;

    @Column
    t_prod_size?: string;

    @Column
    t_prod_code?: string;

    @Column
    t_prod_sku?: string;

    @CreatedAt
    t_prod_created_date?: Date;

    @UpdatedAt
    t_prod_lastModified_date?: Date;

    @BelongsTo(() => ProductCategory)
    product_category?: ProductCategory

}

