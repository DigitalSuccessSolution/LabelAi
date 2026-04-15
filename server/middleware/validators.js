const { body } = require('express-validator');

// ─── Validation for Job Application ─────────────────────────────────────────
exports.validateApplication = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/)
    .withMessage('Please provide a valid phone number'),

  body('jobId')
    .trim()
    .notEmpty().withMessage('Job ID is required'),

  body('jobTitle')
    .trim()
    .notEmpty().withMessage('Job title is required'),

  body('coverLetter')
    .optional({ checkFalsy: true })
    .isLength({ max: 2000 }).withMessage('Cover letter cannot exceed 2000 characters'),

  body('portfolioUrl')
    .optional({ checkFalsy: true })
    .isURL().withMessage('Portfolio URL must be a valid URL'),

  body('linkedinUrl')
    .optional({ checkFalsy: true })
    .isURL().withMessage('LinkedIn URL must be a valid URL'),
];

// ─── Validation for Contact Enquiry ─────────────────────────────────────────
exports.validateContact = [
  body('firstName')
    .trim()
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 2, max: 50 }).withMessage('First name must be between 2 and 50 characters'),

  body('lastName')
    .trim()
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Last name must be between 2 and 50 characters'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('service')
    .trim()
    .notEmpty().withMessage('Service selection is required')
    .isIn(['image', 'video', 'text', 'audio', 'medical', 'lidar', 'other'])
    .withMessage('Invalid service type selected'),

  body('message')
    .trim()
    .notEmpty().withMessage('Project details are required')
    .isLength({ min: 10, max: 3000 }).withMessage('Message must be between 10 and 3000 characters'),
];
