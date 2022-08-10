import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";
import Benefit from "./benefit.model";
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

    @ForeignKey(() => Benefit)
    @Column
    t_vouchr_benfId?: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_vouchr_loyaPromId?: string;

    @ForeignKey(() => LoyaltyProgram)
    @Column
    t_vouchr_loyaProgId?: string;
}

export default Voucher;
