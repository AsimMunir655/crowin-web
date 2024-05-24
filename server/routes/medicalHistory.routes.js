import express from "express";
import { userAuth } from "../middlewares/Auth/auth";
import {
  createMedicalHistory,
  getMedicalHistory,
  updateMedicalHistory,
} from "../controllers/medicalHistory.controller";

const router = express.Router();

router
  .route("/medical-history")
  .get(userAuth, getMedicalHistory)
  .put(userAuth, createMedicalHistory);

export default router;
