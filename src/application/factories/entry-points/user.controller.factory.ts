import { IController } from "../../../infrastructure/entry-points/contracts/http.response";
import { makeUserServiceFactory } from "../use-cases/user.seervice.factory";
import { UserController } from "../../../infrastructure/entry-points/api/user.controller";

export const makeSaveUserControllerFactory = (): IController => {
  return new UserController(makeUserServiceFactory());
};
