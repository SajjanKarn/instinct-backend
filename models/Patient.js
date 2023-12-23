const mongoose = require("mongoose");
const Joi = require("joi");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// validate patient data
exports.patientValidationSchema = Joi.object({
  name: Joi.string().required("Name is required"),
  age: Joi.number().required("Age is required"),
  gender: Joi.string().valid("Male", "Female", "Other").required(),
  contactNumber: Joi.string().required("Contact number is required"),
  appointmentDate: Joi.date().required("Appointment date is required"),
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
