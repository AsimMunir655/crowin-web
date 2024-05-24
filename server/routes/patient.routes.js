import express from "express";
import { myProfile } from "../controllers/admin.controller";
import { myDetails, updateUser } from "../controllers/patient.controller";
import { userAuth } from "../middlewares/Auth/auth";

const router = express.Router();

router.get("/my-profile", userAuth, myProfile);

router.patch("/update-personal-details", userAuth, updateUser);

router.get("/my-details", userAuth, myDetails);

export default router;
