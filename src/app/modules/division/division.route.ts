import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { createDivisionZodSchema } from "./division.validation";
import { DivControllers } from "./division.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();
router.post(
  "/create",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createDivisionZodSchema),
  DivControllers.createDiv
);
router.get(
  "/",
  DivControllers.getDiv
);
router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createDivisionZodSchema),
  DivControllers.updateDiv
);
router.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  DivControllers.deleteDiv
);

export const DivRoutes = router;
