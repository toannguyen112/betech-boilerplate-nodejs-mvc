import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";
import { date } from "yup";
import LoyaltyProgram from "./loyalty_program.model";

@Table({
    tableName: "vouchers",
    timestamps: true,
})
class Voucher extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_vouchr_id?: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_vouchr_vchDefId?: string;

    @Column
    t_vouchrDef_name?: string;

    @Column
    t_vouchrDef_vchDefType?: string;

    @Column
    t_vouchrDef_Status?: boolean;

    @Column
    t_vouchrDef_loyaPromId?: string;

    @Column
    t_vouchrDef_vchType?: string;

    @Column
    t_vouchrDef_productPromotion?: string;

    @Column
    t_vouchrDef_disctPerc?: number;

    @Column
    t_vouchrDef_disctAmt?: number;

    @Column
    t_vouchrDef_maxdisctAmt?: number;

    @Column
    t_vouchrDef_PtsToBurn?: number;

    @Column
    t_vouchrDef_startDate?: Date;

    @Column
    t_vouchrDef_endDate?: number;

    @Column
    t_vouchrDef_extendDate?: number;

    @Column
    t_vouchrDef_vchDuration?: string;

    @Column
    t_vouchrDef_maxIssueVch?: string;

    @Column
    t_vouchrDef_vchPrefix?: string;

    @Column
    t_vouchrDef_vchSuffix?: string;

    @Column
    t_vouchrDef_desc?: string;

    @Column
    t_vouchrDef_recordOwner?: string;

    @Column
    t_vouchrDef_created_by?: string;

    @CreatedAt
    t_vouchrDef_created_date?: Date;

    @Column
    t_vouchrDef_lastModified_by?: string;

    @UpdatedAt
    t_vouchrDef_lastModified_date?: Date;

}

export default Voucher;