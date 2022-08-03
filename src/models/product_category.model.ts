import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt } from "sequelize-typescript";
import Tenant from "./tenant.model";

@Table({
    tableName: 'product_categories',
    timestamps: true,
})
class ProductCategory extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: false,
    })
    t_prodCate_id?: string;

    @ForeignKey(() => ProductCategory)
    @Column
    t_loyalProg_id?: string;

    @ForeignKey(() => Tenant)
    @Column
    t_schema_id?: string;

    @Column
    t_prodCate_name?: string;

    @Column
    t_prodCate_code?: string;

    @Column
    t_prodCate_brand?: string;

    @Column
    t_prodCate_desc?: string;

    @Column
    t_prodCate_recordOwner?: string;

    @Column
    t_prodCate_created_by?: string;

    @Column
    t_prodCate_lastModified_by?: string;

    @CreatedAt
    t_prodCate_created_date?: Date;

    @UpdatedAt
    t_prodCate_lastModified_date?: Date;
}

export default ProductCategory;
