import { IUserService } from "@/domain/use-cases/contracts/user.service";
import {
  HttpResponse,
  IController,
} from "@/infrastructure/entry-points/contracts/http.response";

export class UserController implements IController {
  constructor(private readonly userService: IUserService) {}

  async handle(request?: any): Promise<HttpResponse> {
    await this.userService.create(request);

    return {
      statusCode: 201,
      message: "Created user successfully",
    };
  }
}
