import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    messafe: { type: String },
  },
  { timestamps: true }
);

const ContactUs = mongoose.model("ContactUs", contactSchema);
export default ContactUs;
