import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from "sequelize-typescript";
import Tenant from "./tenant.model";

@Table({
    tableName: 'tenant_users',
    timestamps: true,
})
class TenantUser extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: false,
    })
    t_usr_id?: string;

    @ForeignKey(() => Tenant)
    @Column
    t_schema_id?: string;

    @Column
    t_usr_name?: string;

    @Column
    t_usr_usrName?: string;

    @Column
    t_usr_Password?: string;

    @Column
    t_usr_Email?: string;

    @Column
    t_usr_Phone?: string;

    @Column
    t_usr_recordOwner?: string;

    @Column
    t_usr_created_by?: string;

    @CreatedAt
    t_usr_created_date?: Date;

    @UpdatedAt
    t_usr_lastModified_date?: Date;

    @BelongsTo(() => Tenant)
    tenant?: Tenant

}

export default TenantUser;

