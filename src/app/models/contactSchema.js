import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      maxlength: [1024, "Message should be less than 5kb"],
      minlength: [2],
      trim: true,
      required: false,
      default: "No Message",
    },
  },
  {
    timestamp: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contacts_Data", contactSchema);
