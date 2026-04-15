const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');
const { sendContactEmails } = require('../utils/emailService');

// ─── SUBMIT CONTACT ENQUIRY ──────────────────────────────────────────────────
// POST /api/contact
exports.submitEnquiry = async (req, res, next) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map((err) => ({
          field: err.path,
          message: err.msg,
        })),
      });
    }

    const { firstName, lastName, email, service, message } = req.body;

    const enquiry = await Contact.create({
      firstName,
      lastName,
      email,
      service,
      message,
    });

    // Send email notifications
    try {
      await sendContactEmails({
        firstName,
        lastName,
        email,
        service,
        message
      });
    } catch (emailError) {
      console.error('Contact email sending failed:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your enquiry! Our team will get back to you within 24 hours.',
      data: {
        id: enquiry._id,
        name: `${enquiry.firstName} ${enquiry.lastName}`,
        email: enquiry.email,
        service: enquiry.service,
        submittedAt: enquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─── GET ALL ENQUIRIES (Admin) ───────────────────────────────────────────────
// GET /api/contact
exports.getAllEnquiries = async (req, res, next) => {
  try {
    const { status, service, page = 1, limit = 20 } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (service) filter.service = service;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [enquiries, total] = await Promise.all([
      Contact.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .select('-__v'),
      Contact.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      count: enquiries.length,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      data: enquiries,
    });
  } catch (error) {
    next(error);
  }
};

// ─── GET SINGLE ENQUIRY (Admin) ──────────────────────────────────────────────
// GET /api/contact/:id
exports.getEnquiryById = async (req, res, next) => {
  try {
    const enquiry = await Contact.findById(req.params.id).select('-__v');

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found',
      });
    }

    // Mark as read when accessed
    if (enquiry.status === 'new') {
      enquiry.status = 'read';
      await enquiry.save();
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    next(error);
  }
};

// ─── UPDATE ENQUIRY STATUS (Admin) ───────────────────────────────────────────
// PUT /api/contact/:id/status
exports.updateEnquiryStatus = async (req, res, next) => {
  try {
    const { status, adminNotes } = req.body;

    const validStatuses = ['new', 'read', 'replied', 'closed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const enquiry = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, ...(adminNotes && { adminNotes }) },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found',
      });
    }

    res.status(200).json({
      success: true,
      message: `Enquiry status updated to "${status}"`,
      data: enquiry,
    });
  } catch (error) {
    next(error);
  }
};

// ─── DELETE ENQUIRY (Admin) ──────────────────────────────────────────────────
// DELETE /api/contact/:id
exports.deleteEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Contact.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Enquiry deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
