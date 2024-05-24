import { Contact } from "../models";

export const contactUs = async (req, res) => {
  try {
    const { name, email, subject, message } = req?.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Incomplete details provided" });
    }
    await Contact.create({
      name,
      email,
      message,
      subject: subject || "",
    });
    res.status(200).json({
      message: "Thanks for contacting Us, we have received your information",
    });
  } catch (error) {
    res
      .status(404)
      .json({ message: "An error Occurres", error: error.message });
  }
};
