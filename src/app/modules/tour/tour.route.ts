import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { tourCreateZodSchema, tourUpdateZodSchema } from "./tour.validation";
import { TourControllers } from "./tour.controller";

const router = Router();
router.post(
  "/create",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(tourCreateZodSchema),
  TourControllers.createTour
);
router.get(
  "/",
  TourControllers.getTour
);
router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(tourUpdateZodSchema),
  TourControllers.updateTour
);
router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  TourControllers.deleteTour
);

export const TourRoutes = router;
