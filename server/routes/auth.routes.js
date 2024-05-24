import express from "express";
import { myProfile } from "../controllers/admin.controller";
import {
  adminLogin,
  loginAdmin,
  loginHandler,
  loginPatient,
  registerPatient,
} from "../controllers/auth.controller";
import { userAuth } from "../middlewares/Auth/auth";

const router = express.Router();

router.post("/admin-login", loginHandler, loginAdmin);

router.post("/patient-login", loginHandler, loginPatient);

router.post("/register-patient", registerPatient);

router.get("/profile", userAuth, myProfile);

export default router;
