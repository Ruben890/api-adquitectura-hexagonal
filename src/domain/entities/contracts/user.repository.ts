import { AddUserParams, UserEntity } from "../user.entity";

export interface IUserRepository {
  findByUsername(username: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  create(user: AddUserParams): Promise<void>;
  update(user: UserEntity): Promise<void>;
  delete(id: number): Promise<void>;
}
