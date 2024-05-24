import validator from "validator";
import { User } from "../models";
import bcrypt from "bcryptjs";
export const loginValidator = ({ email, password }) => {
  const errors = { messages: [] };
  if (!email) {
    errors.messages.push("Please enter your email");
  }
  if (!password) {
    errors.messages.push("Please enter your password");
  }
  return {
    errors,
    isValid: errors.messages.length,
  };
};

export const updateProfileValidator = async (
  { firstName, lastName, password, phoneNumber, confirmPassword },
  image,
  { email: realEmail }
) => {
  const prevProfile = await User.findOne({ email: realEmail });
  if (!prevProfile) {
    return null;
  }
  if (!(await confirmPasswordValidator(password, confirmPassword))) {
    return null;
  }
  const user = {};
  user.firstName = firstName || prevProfile?.firstName || "";
  user.lastName = lastName || prevProfile?.lastName || "";
  user.phoneNumber = phoneNumber || prevProfile?.phoneNumber || "";
  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }
  if (image) {
    user.profilePicture = image?.path;
  }
  return user;
};

export const confirmPasswordValidator = (password, confirmPassword) =>
  password === confirmPassword;

export const userExists = (data) => User.exists({ ...data });
