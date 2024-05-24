import express from "express";
import {
  getPatient,
  myProfile,
  patientsList,
  updateProfile,
} from "../controllers/admin.controller";
import { adminAuth } from "../middlewares/Auth/auth";
import { file } from "../libraries/multer";
import { getMedicalHistory } from "../controllers/medicalHistory.controller";

const router = express.Router();

router.patch("/update-profile", adminAuth, file.single("image"), updateProfile);

router.get("/patients-list", adminAuth, patientsList);

router.get("/get-patient/:id", adminAuth, getPatient);

router.get("/my-profile", adminAuth, myProfile);

router.get("/medical-history", adminAuth, getMedicalHistory);

export default router;
