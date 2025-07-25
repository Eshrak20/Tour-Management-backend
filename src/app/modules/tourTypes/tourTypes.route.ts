import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { createTourTypeZodSchema } from "./tourTypes.validation";
import { TourTypeControllers } from "./tourTypes.controller";

const router = Router();
router.post(
  "/create-tour-type",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createTourTypeZodSchema),
  TourTypeControllers.createTourType
);
router.get(
  "/tour-types",
  TourTypeControllers.getTourType
);
router.patch(
  "/tour-types/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createTourTypeZodSchema),
  TourTypeControllers.updateTourType
);
router.delete(
  "/tour-types/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  TourTypeControllers.deleteTourType
);

export const tourTypesRoutes = router;
