// import { urlencoded } from "express";
// import mongoose from "mongoose";

// import validator from "validator";

// const applicationSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Please provide your name!"],
//     minLength: [3, "Name must contain atleast 3 characters"],
//     maxLength: [30, "Name cannot exceeds 30 characters"],
//   },
//   email: {
//     type: String,
//     validator: [validator.isEmail, "Please provide valid email"],
//     required: [true, "Please provide your email"],
//   },
//   coverLetter: {
//     type: String,
//     required: [true, "Please provide your cover letter"],
//   },
//   phone: {
//     type: Number,
//     required: [true, "Please provide your phone number"],
//     minLength: [10, "Phone number must contain atleast 10 numbers"],
//     maxLength: [10, "Phone number must contain less than 10 numbers"],
//   },
//   address: {
//     type: String,
//     required: [true, "Please provide your address"],
//   },
//   resume: {
//     public_id: {
//       type: String,
//       required: [true, "Please provide your resume public id"],
//     },
//     url: {
//       type: String,
//       required: [true, "Please provide your resume url"],
//     },
//   },
//   applicationID: {
//     user: {
//       type: mongoose.Schema.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: ["Job Seeker"],
//       required: true,
//     },
//   },
//   employerID: {
//     user: {
//       type: mongoose.Schema.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: ["Employer"],
//       required: true,
//     },
//   },
// });

// export const Application = mongoose.model("Application", applicationSchema);

import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please enter your cover letter"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  employerID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

export const Application = mongoose.model("Application", applicationSchema);
