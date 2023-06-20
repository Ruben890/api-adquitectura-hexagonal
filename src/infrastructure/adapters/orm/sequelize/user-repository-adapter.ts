import { IUserRepository } from "@/domain/entities/contracts/user.repository";
import { UserEntity, AddUserParams } from "@/domain/entities/user.entity";
import { UserModelMysql } from "./models/user-model";

export class UserRepositoryAdapter implements IUserRepository {
  async findByUsername(username: string): Promise<UserEntity> {
    return UserModelMysql.findOne({
      where: { username: username },
    });
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return UserModelMysql.findOne({
      where: { email: email },
    });
  }

  async create(user: AddUserParams): Promise<void> {
    await UserModelMysql.create(user);
  }

  async update(user: UserEntity): Promise<void> {
    await UserModelMysql.update(user, { where: { id: user.id } });
  }

  async delete(id: number): Promise<void> {
    await UserModelMysql.destroy({
      where: { id: id },
    });
  }
}
