import { Table, Column, Model, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: 'tenants',
    timestamps: true,
})
class Tenant extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: false,
    })
    t_schema_id?: string;

    @Column
    t_schName?: string;

    @Column
    t_schStart_date?: Date;

    @Column
    t_schEnd_date?: Date;

    @Column
    t_sch_recordOwner?: string;

    @Column
    t_sch_created_by?: string;

    @Column
    t_sch_lastModified_by?: string;

    @CreatedAt
    t_sch_created_date?: Date;

    @UpdatedAt
    t_sch_lastModified_date?: Date;

}

export default Tenant;

