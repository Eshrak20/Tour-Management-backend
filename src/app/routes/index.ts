import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { DivRoutes } from "../modules/division/division.route";
import { tourTypesRoutes } from "../modules/tourTypes/tourTypes.route";
import { TourRoutes } from "../modules/tour/tour.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/division",
    route: DivRoutes,
  },
  {
    path: "/tour",
    route: TourRoutes,
  },
  {
    path: "/tour",
    route: tourTypesRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

