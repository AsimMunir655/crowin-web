import express from "express";
import { userAuth } from "../middlewares/Auth/auth";
import {
  createMedicalCondition,
  getMedicalCondition,
  updateMedicalCondition,
} from "../controllers/medicalCondition.controller";

const router = express.Router();
router
  .route("/medical-condition")
  .get(userAuth, getMedicalCondition)
  .put(userAuth, createMedicalCondition);

export default router;
