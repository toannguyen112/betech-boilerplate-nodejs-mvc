import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, PrimaryKey, BeforeCreate, BeforeSave, DataType } from "sequelize-typescript";
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
    t_usr_id!: string;

    @ForeignKey(() => Tenant)
    @Column
    t_schema_id!: string;

    @Column
    t_usrRole_id!: string;

    @Column
    t_usr_name!: string;

    @Column({
        unique: true,
    })
    t_usr_usrName!: string;

    @Column({
        validate: {
            is: /^[0-9a-f]{64}$/i,
        },
    })
    t_usr_Password!: string;

    @Column
    t_usr_Email!: string;

    @Column
    t_usr_Phone!: string;

    @Column
    t_usr_recordOwner!: string;

    @Column
    t_usr_created_by!: string;

    @Column
    t_usr_lastModified_by!: string;

    @Column({
        type: DataType.JSON,
    })
    tokens!: any;

    @CreatedAt
    t_usr_created_date!: Date;

    @UpdatedAt
    t_usr_lastModified_date!: Date;

    @BelongsTo(() => Tenant)
    tenant!: Tenant;

    @BeforeCreate
    static randomId(instance: TenantUser, options: any) {
        instance.t_usr_id = `TUR${Helper.randomString(20)}`;
    }

    async hashPassword(password: string) {
        const hashedPassword = await bcrypt.hash(password, 8);
        return hashedPassword;
    }

    async getListData(req: Request, res: Response) {
        try {
            const tenant_users = await TenantUser.findAll({});
            return res.status(200).json(tenant_users);
        } catch (error) {
            res.status(500);
        }
    }

    async handleLogin(req: Request, res: Response) {
        try {
            const foundUser = await TenantUser.findOne({ where: { t_usr_usrName: req.body.username } });
            if (!foundUser) {
                return res.status(500).send("Name of user is not correct");
            }

            const isMatch: boolean = bcrypt.compareSync(req.body.password, foundUser.t_usr_Password);

            if (isMatch) {
                const token = jwt.sign(
                    {
                        tenant_user: {
                            t_usr_id: foundUser.t_usr_id,
                            t_schema_id: foundUser.t_schema_id,
                            t_usr_name: foundUser.t_usr_name,
                        },
                    },
                    env.SERVER_JWT_SECRET,
                    { expiresIn: env.SERVER_JWT_TIMEOUT }
                );

                let obj = {
                    token: token,
                };

                foundUser.tokens = foundUser.tokens ? foundUser.tokens.concat(obj) : [obj];

                foundUser.save();

                console.log(req.tenant_user);

                return res.status(200).json({
                    user: foundUser,
                    token: token,
                });
            } else {
                return res.status(500).send("Password is not correct");
            }
        } catch (error) {
            console.log(error);
            res.status(500);
        }
    }

    async handleRegister(req: Request, res: Response) {
        try {
            const { t_usr_usrName, t_usr_Password, t_usr_name, t_usr_Email, t_usr_Phone } = req.body;
            const t_password = await this.hashPassword(t_usr_Password);

            await TenantUser.create({
                t_schema_id: "SCHwKEbuMjETRJ80BIi3V41",
                t_usr_name: t_usr_name,
                t_usr_usrName: t_usr_usrName,
                t_usr_Password: t_password,
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
