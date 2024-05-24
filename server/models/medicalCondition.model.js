import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    condition: {
      conditionType: { type: String },
      comments: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("MedicalCondition", schema);
