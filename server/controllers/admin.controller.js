import { User } from "../models";
import { updateProfileValidator } from "../validators/validator";
import { Types } from "mongoose";

const ObjectId = Types.ObjectId;
export const myProfile = async (req, res) => {
  try {
    res.status(200).json({ user: req?.user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await updateProfileValidator(req?.body, req?.file, req?.user);
    if (!user) {
      return res
        .status(404)
        .json({ message: "An error occurred while updating your profile" });
    }

    const updated = await User.findOneAndUpdate(
      { _id: req?.user?._id },
      { ...user },
      { new: true }
    );
    updated.save();
    res.status(200).json({ message: "Profile Updated", user: updated });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const patientsList = async (req, res) => {
  try {
    const patientsList = await User.aggregate([
      { $match: { role: "patient" } },
      {
        $lookup: {
          from: "patients",
          localField: "_id",
          foreignField: "userId",
          as: "patient",
        },
      },
      { $unwind: "$patient" },
      // { $addFields: { medical: "$patient.medical" } },
      {
        $project: {
          __v: 0,
          password: 0,
          updatedAt: 0,
          // patient: 0,
        },
      },
    ]);
    res.status(200).json({
      message: "Success",
      results: patientsList.length,
      patients: patientsList,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPatient = async (req, res) => {
  try {
    const _id = new ObjectId(req?.params?.id);
    let user = await User.aggregate([
      { $match: { _id: ObjectId("61840a4c58b5dda2089998ad") } },

      { $match: { _id } },
      {
        $lookup: {
          from: "patients",
          localField: "_id",
          foreignField: "userId",
          as: "patient",
        },
      },
      { $unwind: "$patient" },
      {
        $lookup: {
          from: "medicalconditions",
          localField: "_id",
          foreignField: "userId",
          as: "medicalCondition",
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "_id",
          foreignField: "userId",
          as: "patientProfile",
        },
      },
      { $unwind: "$medicalHistory" },
      { $unwind: "$medicalCondition" },
      { $unwind: "$patientProfile" },
      {
        $project: {
          "patientProfile._id": 0,
          "patientProfile.userId": 0,
          "patientProfile.__v": 0,
          "patientProfile.createdAt": 0,
          "patientProfile.updatedAt": 0,
          "medicalCondition._id": 0,
          "medicalCondition.userId": 0,
          "medicalHistory._id": 0,
          "medicalHistory.userId": 0,
          "medicalHistory.__v": 0,
          "medicalHistory.createdAt": 0,
          "medicalHistory.updatedAt": 0,
          "medicalCondition.createdAt": 0,
          "medicalCondition.updatedAt": 0,
          "medicalCondition.__v": 0,
          _id: 0,
          password: 0,
          confirmPassword: 0,
          createdAt: 0,
          updatedAt: 0,
          __v: 0,
        },
      },
    ]);
    console.log("user", user);
    user = user ? user[0] : null;
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "Success", user });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
