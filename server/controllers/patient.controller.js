import { User, Patient } from "../models";

export const updateUser = async (req, res) => {
  try {
    const {
      firstName,
      gender,
      dateOfBirth,
      height,
      weight,
      bloodGroup,
      adress,
      state,
      zipCode,
      city,
      country,
    } = req?.body;
    console.log(req?.body);
    let user = {};
    user = await User.findOneAndUpdate(
      { _id: req?.user._id },
      { firstName },
      { new: true }
    );

    let patient = await Patient.findOneAndUpdate(
      { userId: req?.user?._id },
      {
        personalDetails: {
          gender,
          height,
          weight,
          bloodGroup,
          dateOfBirth: new Date(dateOfBirth),
        },
        adressDetails: {
          adress,
          zipCode,
          country,
          state,
          city,
        },
      },
      { new: true }
    );

    res.status(200).json({ message: "Success", user, patient });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const myDetails = async (req, res) => {
  try {
    let user = await User.aggregate([
      {
        $match: { _id: req?.user?._id },
      },
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
        $addFields: {
          personalDetails: "$patient.personalDetails",
          address: "$patient.adressDetails",
        },
      },
      {
        $project: {
          __v: 0,
          password: 0,
          updatedAt: 0,
          patient: 0,
          confirmPassword: 0,
        },
      },
    ]);
    user = user ? user[0] : null;
    if (!user) {
      return res.status(400).json({ message: "Error Loading Profile" });
    }
    res.status(200).json({ message: "Success", user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
