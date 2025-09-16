import expres from "express";
import {
  Signup,
  DeleteUser,
  GetAllUser,
  GetUserById,
  UpdateUser,
  Signin,
  Logout,
  CheckAuth,
} from "../controllers/user.controller.js";
import { Protected } from "../middlewares/auth.middleware.js";

const router = expres.Router();

router.get("/", GetAllUser);
router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/logout", Logout);
router.post("/:id", GetUserById);
router.delete("/delete/:id", DeleteUser);
router.put("/update/:id", Protected, UpdateUser);
router.get("/check", Protected, CheckAuth);

export default router;
