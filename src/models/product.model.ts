import { Table, Column, Model, CreatedAt, UpdatedAt, BelongsTo, ForeignKey, PrimaryKey } from "sequelize-typescript";
import ProductCategory from "./product_category.model";

@Table({
    tableName: "products",
    timestamps: true,
})

export default class Product extends Model {
    @PrimaryKey
    @Column({
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

    @Column
    t_prod_gender?: string;

    @Column
    t_prod_color?: string;

    @Column
    t_prod_ageFrom?: number;

    @Column
    t_prod_ageTo?: number;

    @Column
    t_prod_startDate?: Date;

    @Column
    t_prod_endDate?: Date;

    @Column
    t_prod_desc?: string;

    @Column
    t_prod_specs?: string;

    @Column
    t_prod_recordOwner?: string;

    @Column
    t_prod_price?: number;

    @Column
    t_prod_imgURL?: string;

    @Column
    t_prod_created_by?: string;

    @Column
    t_prod_lastModified_by?: string;

    @CreatedAt
    t_prod_created_date?: Date;

    @UpdatedAt
    t_prod_lastModified_date?: Date;

    // relationship
    @BelongsTo(() => ProductCategory)
    product_category?: ProductCategory
}

