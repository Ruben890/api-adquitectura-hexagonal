import { Request, Response } from "express";
import { IController } from "@/infrastructure/entry-points/contracts/http.response";

export class ExpressRouteAdapter {
  static adaptRoute(controller: IController) {
    return async (req: Request, res: Response) => {
      const request = {
        ...(req.body || {}),
        ...(req.params || {}),
      };

      const httpResponse = await controller.handle(request);
      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
      } else {
        res.status(httpResponse.statusCode).json({
          error: httpResponse,
        });
      }
    };
  }
}
