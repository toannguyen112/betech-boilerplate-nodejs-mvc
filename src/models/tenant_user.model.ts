import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, PrimaryKey, BeforeCreate, BeforeSave } from "sequelize-typescript";
import Helper from "../utils/helpers";
import Tenant from "./tenant.model";
import bcrypt from 'bcrypt';

@Table({
    tableName: 'tenant_users',
    timestamps: true,
})
class TenantUser extends Model {
    @PrimaryKey
    @Column({
        autoIncrement: false,
    })
    t_usr_id?: string;

    @ForeignKey(() => Tenant)
    @Column
    t_schema_id?: string;

    @Column
    t_usrRole_id?: string;

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

    @Column
    t_usr_lastModified_by?: string;

    @CreatedAt
    t_usr_created_date?: Date;

    @UpdatedAt
    t_usr_lastModified_date?: Date;

    @BelongsTo(() => Tenant)
    tenant?: Tenant

    @BeforeCreate
    static randomId(instance: TenantUser, options: any) {
        instance.t_usr_id = `TUR${Helper.randomString(20)}`;
    }

    @BeforeSave
    static async hashPassword(instance: TenantUser, options: any) {
        const hashedPassword = await bcrypt.hash(instance.t_usr_Password, 8);
        instance.t_usr_Password = hashedPassword;
    }
}

export default TenantUser;

