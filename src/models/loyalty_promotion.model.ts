import { Table, Column, PrimaryKey, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo } from "sequelize-typescript";
import Tenant from "./tenant.model";

@Table({
    tableName: "loyalty_promotions",
    timestamps: true,
})
class LoyaltyPromotion extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_loyalProg_id?: string;

    @ForeignKey(() => Tenant)
    @Column
    t_schema_id?: string;

    @Column
    t_loyalProg_name?: string;

    @Column
    t_loyalProg_status?: string;

    @Column
    t_loyalProg_transQuaPt?: boolean;

    @Column
    t_loyalProg_tierReCycle?: string;

    @Column
    t_loyalProg_tierStartDate?: Date;

    @Column
    t_loyalProg_lastTierReDate?: Date;

    @Column
    t_loyalProg_nextTierReDate?: Date;

    @Column
    t_loyalProg_desc?: string;

    @Column
    t_loyalProg_recordOwner?: string;

    @Column
    t_loyalProg_created_by?: string;

    @Column
    t_loyalProg_lastModified_by?: string;

    @CreatedAt
    t_loyalProg_created_date?: Date;

    @UpdatedAt
    t_loyalProg_lastModified_date?: Date;

    @BelongsTo(() => Tenant)
    tenant?: Tenant
}

export default LoyaltyPromotion;