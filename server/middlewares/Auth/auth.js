import jwt from "jsonwebtoken";
import config from "../../config/index";
import { User } from "../../models";

// Check it the user is authenticated or not
export const adminAuth = async (req, res, next) => {
  try {
    const token =
      req.headers["x-access-token"] ||
      req?.headers?.authorization?.split(" ")[1];

    if (!token || token === "null") {
      return res
        .status(401)
        .json({ message: "Login first to access the resource." });
    }

    const decoded = jwt?.verify(token, config.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Token expired, please generate new one" });
    }
    if (user.role !== "admin") {
      return res.status(400).json({
        message: "Unauthorized",
      });
    }

    req.user = await User.findById(decoded.id);
  } catch (error) {
    return res.status(401).json({
      message: "Request Failed",
      error: error.message,
    });
  }

  next();
};

export const userAuth = async (req, res, next) => {
  try {
    const token =
      req.headers["x-access-token"] ||
      req?.headers?.authorization?.split(" ")[1];

    if (!token || token === "null") {
      return res
        .status(401)
        .json({ message: "Login first to access the resource." });
    }

    const decoded = jwt?.verify(token, config.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Token expired, please generate new one" });
    }

    req.user = await User.findById(decoded.id);
  } catch (error) {
    return res.status(401).json({
      message: "There is a problem with your token, please login again",
      error,
    });
  }

  next();
};
