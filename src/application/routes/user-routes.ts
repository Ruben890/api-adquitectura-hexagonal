import { Router } from "express";
import { ExpressRouteAdapter } from "../adapter/express.adapter";
import { makeSaveUserControllerFactory } from "../factories/entry-points/user.controller.factory";

export default (router: Router): void => {
  router.post(
    "/register",
    ExpressRouteAdapter.adaptRoute(makeSaveUserControllerFactory())
  );
};
