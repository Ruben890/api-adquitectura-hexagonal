import { IUserService } from "../../../domain/use-cases/contracts/user.service";
import { UserServiceImpl } from "../../../domain/use-cases/impl/user.service.impl";
import { BcryptAdapter } from "../../../infrastructure/adapters/bcrypt.adater";
import { UserRepositoryAdapter } from "../../../infrastructure/adapters/orm/sequelize/user-repository-adapter";

export const makeUserServiceFactory = (): IUserService => {
  const userRepositoryAdapter = new UserRepositoryAdapter();
  const bcryptAdapter = new BcryptAdapter();

  return new UserServiceImpl(userRepositoryAdapter, bcryptAdapter);
};
