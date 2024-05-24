import { MedicalCondition } from "../models";

export const createMedicalCondition = async (req, res) => {
  try {
    const { body, user } = req;
    const data = await MedicalCondition.findOneAndUpdate(
      { userId: user._id },
      {
        userId: user?._id,
        condition: {
          conditionType: body?.conditionType,
          comments: body?.comments,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ message: "Added Medical Condition", data });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const getMedicalCondition = async (req, res) => {
  try {
    const medicalCondition = await MedicalCondition.findOne({
      userId: req?.user?._id,
    });

    res.status(200).json({
      message: "Success",
      medicalCondition: medicalCondition?.condition,
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const updateMedicalCondition = async (req, res) => {
  try {
    const { user, body } = req;
    const medicalCondition = await MedicalCondition.findOneAndUpdate(
      {
        userId: user?._id,
      },
      {
        $set: {
          condition: {
            conditionType: body?.conditionType || this?.conditionType,
            comments: body?.comments || this?.comments,
          },
        },
      },
      { new: true }
    );

    res.status(200).json(medicalCondition?.condition);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
