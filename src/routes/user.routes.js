import { Router } from "express";
import userController from "../controlle/user.controlle.js";

const router = Router();

router.post("/users", userController.createUserControlle)

export default router