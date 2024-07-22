import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the job title"],
    minLength: [3, "Job title must contain atleast 3 minimum characters"],
    maxLength: [50, "Job tittle cannot exceed 50 characaters"],
  },
  description: {
    type: String,
    required: [true, "Please provide the job description"],
    minLength: [
      3,
      "Job description must contain atleast 50 minimum characters",
    ],
    maxLength: [500, "Job description cannot exceed 500 characaters"],
  },
  category: {
    type: String,
    required: [true, "Please provide the job category"],
  },
  country: {
    type: String,
    required: [true, "Please provide the job country"],
  },
  city: {
    type: String,
    required: [true, "Please provide the job city"],
  },
  location: {
    type: String,
    required: [true, "Please provide the job location"],
    minLength: [50, "Job location must contain atleast 50 characters"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed salary must contain atleast 4 digits"],
    maxLength: [9, "Fixed length "],
  },
  salaryForm: {
    type: String,
    minLength: [4, "Salary form must contain atleast 4 digits"],
    maxLength: [9, "Salary form cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary to must contain atleast 4 digits"],
    maxLength: [9, "Salary to cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
