import { Table, Column, ForeignKey, Model, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: "organizations",
    timestamps: true,
})
class Organization extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    org_id?: string;
}

export default Organization;
