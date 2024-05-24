import { User, Patient } from "../models/";
import {
  confirmPasswordValidator,
  loginValidator,
  userExists,
} from "../validators/validator";

export const loginHandler = async (req, res, next) => {
  try {
    const { errors, isValid } = await loginValidator(req?.body);
    if (isValid > 0) {
      return res.status(400).json({ message: errors.messages });
    }
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No user Found on this email" });
    }
    if (!(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Email/Password does not match" });
    }
    const token = user.getJwtToken();
    (res.token = token), (res.role = user?.role), (res.user = user);
    next();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { token, role, user } = res;
    if (!token || role !== "admin") {
      return res.status(404).json({ message: "Login Failed" });
    }
    res.status(200).json({ message: "Logged In", token, user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const loginPatient = async (req, res) => {
  try {
    const { token, role, user } = res;
    if (!token || role !== "patient") {
      return res.status(404).json({ message: "Login Failed" });
    }
    res.status(200).json({ message: "Logged In", token, user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const registerPatient = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      dateOfBirth,
      password,
      confirmPassword,
    } = req?.body;
    let user = await User.findOne({ email });
    if (await userExists({ email })) {
      return res
        .status(400)
        .json({ message: "User Already exists on this email" });
    }
    if (await !confirmPasswordValidator(password, confirmPassword)) {
      return res
        .status(400)
        .json({ message: "Password and confirm password does not match" });
    }
    user = new User({
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
      confirmPassword,
    });
    let patient = new Patient({
      userId: user?._id,
      personalDetails: {
        dateOfBirth: new Date(dateOfBirth),
      },
    });
    user.save();
    patient.save();
    res.status(200).json({ message: "Registered" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const myProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req?.user?._id });
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
