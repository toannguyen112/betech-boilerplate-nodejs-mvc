import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, PrimaryKey, BeforeCreate, BeforeSave } from "sequelize-typescript";
import { Request, Response } from "express";
import Helper from "../utils/helpers";
import Tenant from "./tenant.model";
import bcrypt from "bcrypt";
import { env } from "process";

const jwt = require("jsonwebtoken");

@Table({
    tableName: "tenant_users",
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
    tenant?: Tenant;

    @BeforeCreate
    static randomId(instance: TenantUser, options: any) {
        instance.t_usr_id = `TUR${Helper.randomString(20)}`;
    }

    @BeforeSave
    static async hashPassword(instance: TenantUser, options: any) {
        const hashedPassword = await bcrypt.hash(instance.t_usr_Password, 8);
        instance.t_usr_Password = hashedPassword;
    }

    static async getListData(req: Request, res: Response) {
        try {
            const tenant_users = await TenantUser.findAll({});
            return res.status(200).json(tenant_users);
        } catch (error) {
            res.status(500);
        }
    }

    static async handleLogin(req: Request, res: Response) {
        const foundUser: TenantUser = await TenantUser.findOne({ where: { t_usr_usrName: req.body.username } });

        if (!foundUser) {
            return res.status(500).send("Name of user is not correct");
        }

        const isMatch: boolean = bcrypt.compareSync(req.body.password, foundUser.t_usr_Password);

        if (isMatch) {
            const token: string = jwt.sign({ tenant_user: foundUser }, env.SERVER_JWT_SECRET, { expiresIn: env.SERVER_JWT_TIMEOUT });

            return res.status(200).json({
                user: {
                    t_usr_id: foundUser.t_usr_id,
                    t_usr_usrName: foundUser.t_usr_usrName,
                },
                token: token,
            });
        } else {
            return res.status(500).send("Password is not correct");
        }
    }

    static async handleRegister(req: Request, res: Response) {
        try {
            const { t_usr_usrName, t_usr_Password, t_usr_name, t_usr_Email, t_usr_Phone } = req.body;

            await TenantUser.create({
                t_schema_id: "SCHUvrOdezuahjsvUyK7L6W",
                t_usr_name: t_usr_name,
                t_usr_usrName: t_usr_usrName,
                t_usr_Password: t_usr_Password,
                t_usr_Email: t_usr_Email,
                t_usr_Phone: t_usr_Phone,
            });

            return res.status(200).send("Register successfully");
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }
}

export default TenantUser;
