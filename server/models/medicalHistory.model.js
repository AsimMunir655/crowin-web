import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    medicalHistory: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("MedicalHistory", medicalSchema);
