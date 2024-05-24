import { User, MedicalHistory } from "../models";

export const createMedicalHistory = async (req, res) => {
  try {
    const { body, user } = req;
    console.log(body);

    const data = await MedicalHistory.findOneAndUpdate(
      { userId: req?.user?._id },
      {
        userId: user?._id,
        medicalHistory: JSON.stringify(body),
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    await User.findOneAndUpdate(
      { _id: user?._id },
      { $set: { isProfileCompleted: true } }
    );
    res.status(200).json({ message: "Added Medical History", data });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const getMedicalHistory = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistory.findOne({
      userId: req?.user?._id,
    });
    const data = medicalHistory
      ? JSON.parse(medicalHistory?.medicalHistory)
      : "";
    res.status(200).json({ message: "Success", data });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// export const updateMedicalHistory = async (req, res) => {
//   try {
//     const { user, body } = req;
//     const medicalHistory = await MedicalHistory.findOneAndUpdate(
//       {
//         userId: user?._id,
//       },
//       {
//         $set: {
//           medicalHistory: JSON.stringify(body),
//         },
//       },
//       { new: true }
//     );

//     let data = {
//       userId: medicalHistory.userId,
//       history: JSON.parse(medicalHistory.medicalHistory),
//     };

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
