//Generate user schema with the details
// name
// phone number
// DOB
// department
// level
// school(sec)
// University
// email address
// picture

import { Schema, model } from "mongoose";
const userSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dob: { type: Date, required: true },
  department: { type: String, required: true },
  level: { type: String, required: true },
  schoolSec: { type: String, required: true },
  university: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true },
  picture: { type: String, required: false }, // URL or path to the picture
});

const User = model("User", userSchema);
export default User;
