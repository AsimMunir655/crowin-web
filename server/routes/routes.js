import express from "express";
import authRoutes from "./auth.routes";
import adminRoutes from "./admin.routes";
import patientRoutes from "./patient.routes";
import medicalHistoryRoutes from "./medicalHistory.routes";
import medicalConditionRoutes from "./medicalCondition.routes";
import { contactUs } from "../controllers/contact-us.controller";

function router(api) {
  api.use("/api", (req, res) => {
    res.send("CROWIN API");
  });
  api.use("/api/auth", authRoutes);
  api.use("/api/admin", adminRoutes);
  api.use("/api/patient", patientRoutes);
  api.use("/api/patient", medicalHistoryRoutes);
  api.use("/api/patient", medicalConditionRoutes);
  api.post("/api/contact-us", contactUs);
}
export default router;
