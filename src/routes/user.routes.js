import { Router } from "express";
import userController from "../controller/user.controller.js";
import {
  validate,
  ValidateUserId,
} from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/user.schema.js";

const router = Router();

router.post(
  "/users",
  validate(userSchema),
  userController.createUserController
);

router.get("/users", userController.findAllUserController);
router.get("/users/:id", ValidateUserId, userController.findUserByIdController);
router.patch("/users/:id", ValidateUserId, userController.updateUserController);



router.delete(
  "/users/:id",
  ValidateUserId,
  userController.deleteUserController
);

export default router;
