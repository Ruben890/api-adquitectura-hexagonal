import { AddUserParams, UserEntity } from "../../entities/user.entity";

export interface IUserService {
  findByUsername(username: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  create(user: AddUserParams): Promise<void>;
  update(user: UserEntity): Promise<void>;
  delete(id: number): Promise<void>;
}
