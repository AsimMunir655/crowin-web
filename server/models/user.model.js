import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
    mobileNumber: { type: String },
    isProfileCompleted: { type: Boolean, default: false },
    status: { type: String, enum: ["active", "block"], default: "active" },
    role: {
      type: String,
      enum: ["patient", "admin"],
      default: "patient",
    },
    profilePicture: { type: String, default: "" },
  },
  { timestamps: true }
);

//Encrypting Password Before Saving User
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
});

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  console.log(enteredPassword, this.password);
  return await bcrypt.compare(enteredPassword, this.password);
};
// Return JWT
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};

const User = mongoose.model("User", userSchema);
export default User;
