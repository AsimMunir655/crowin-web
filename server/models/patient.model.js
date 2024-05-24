import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    personalDetails: {
      gender: { type: String },
      dateOfBirth: { type: Date },
      height: { type: String },
      weight: { type: String },
      bloodGroup: { type: String },
    },
    adressDetails: {
      adress: { type: String },
      zipCode: { type: Number },
      country: { type: String },
      state: { type: String },
      city: { type: String },
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
