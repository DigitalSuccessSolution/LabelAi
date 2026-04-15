const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      required: [true, 'Job ID is required'],
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Job category is required'],
      trim: true,
    },
    vacancies: {
      type: String,
      default: '01',
    },
    workMode: {
      type: String,
      required: true,
      enum: ['Remote', 'Hybrid', 'On-site', 'Remote / Hybrid'],
    },
    engagement: {
      type: String,
      required: true,
      enum: ['Full-Time', 'Part-Time', 'Contract', 'Internship'],
    },
    commitment: {
      type: String,
      required: true,
    },
    compensation: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, 'Job description is required'],
    },
    responsibilities: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => v.length > 0,
        message: 'At least one responsibility is required',
      },
    },
    requirements: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => v.length > 0,
        message: 'At least one requirement is required',
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Job', jobSchema);
