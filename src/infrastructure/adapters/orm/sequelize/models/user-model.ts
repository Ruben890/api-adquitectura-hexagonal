import { UserEntity } from "@/domain/entities/user.entity";
import {
  AutoIncrement,
  Column,
  PrimaryKey,
  Table,
  Model,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "users",
})
export class UserModelMysql extends Model<UserEntity> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  email: string;

  @Column
  password: string;

  @Column({ field: "user_name" })
  username: string;

  @Column
  name: string;

  @Column({ field: "last_name" })
  lastName: string;

  @Column
  age: number;

  @Column({ field: "created_at" })
  createdAt: Date;

  @Column({ field: "updated_at" })
  updatedAt: Date;
}
