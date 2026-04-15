const Job = require('../models/Job');
const Application = require('../models/Application');
const { validationResult } = require('express-validator');
const { sendCareerEmails } = require('../utils/emailService');

// ─── GET ALL JOBS ─────────────────────────────────────────────────────────────
// GET /api/careers
exports.getAllJobs = async (req, res, next) => {
  try {
    const { category, workMode, engagement, search, active } = req.query;
    const filter = {};

    // Return active jobs by default, but allow fetching all (for admin)
    if (active !== 'all') {
      filter.isActive = active !== undefined ? active === 'true' : true;
    }

    if (category) filter.category = { $regex: category, $options: 'i' };
    if (workMode) filter.workMode = { $regex: workMode, $options: 'i' };
    if (engagement) filter.engagement = { $regex: engagement, $options: 'i' };
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const jobs = await Job.find(filter)
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error) {
    next(error);
  }
};

// ─── GET SINGLE JOB ──────────────────────────────────────────────────────────
// GET /api/careers/:id
exports.getJobById = async (req, res, next) => {
  try {
    const job = await Job.findOne({ jobId: req.params.id }).select('-__v');

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found',
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    next(error);
  }
};
// ─── SUBMIT JOB APPLICATION ──────────────────────────────────────────────────
// POST /api/careers/apply
exports.submitApplication = async (req, res, next) => {
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

    const {
      fullName,
      email,
      phone,
      jobId,
      jobTitle,
      coverLetter,
      portfolioUrl,
      linkedinUrl,
      experienceYears,
    } = req.body;

    // Check if user has already applied for this job
    const existingApplication = await Application.findOne({ email, jobId });
    if (existingApplication) {
      return res.status(409).json({
        success: false,
        message: 'You have already applied for this position. We will contact you soon.',
      });
    }

    // Handle resume file upload
    let resumeUrl = '';
    let resumeOriginalName = '';
    if (req.file) {
      resumeUrl = req.file.path; // Multer-storage-cloudinary provides the URL here
      resumeOriginalName = req.file.originalname;
    }

    const application = await Application.create({
      fullName,
      email,
      phone,
      jobId,
      jobTitle,
      coverLetter: coverLetter || '',
      resumeUrl,
      resumeOriginalName,
      portfolioUrl: portfolioUrl || '',
      linkedinUrl: linkedinUrl || '',
      experienceYears: experienceYears || '',
    });

    // Send email notifications
    try {
      await sendCareerEmails({
        fullName,
        email,
        phone,
        jobTitle,
        experienceYears: experienceYears || 'N/A',
        resumeUrl,
        coverLetter,
        linkedinUrl,
        portfolioUrl
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // We don't want to fail the request if just the email fails
    }

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will review your profile and respond within 48 hours.',
      data: {
        id: application._id,
        fullName: application.fullName,
        email: application.email,
        jobTitle: application.jobTitle,
        status: application.status,
        submittedAt: application.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─── GET ALL APPLICATIONS (Admin) ────────────────────────────────────────────
// GET /api/careers/applications
exports.getAllApplications = async (req, res, next) => {
  try {
    const { status, jobId, page = 1, limit = 20 } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (jobId) filter.jobId = jobId;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [applications, total] = await Promise.all([
      Application.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .select('-__v'),
      Application.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      count: applications.length,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      data: applications,
    });
  } catch (error) {
    next(error);
  }
};

// ─── UPDATE APPLICATION STATUS (Admin) ───────────────────────────────────────
// PUT /api/careers/applications/:id/status
exports.updateApplicationStatus = async (req, res, next) => {
  try {
    const { status, notes } = req.body;

    const validStatuses = ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status, ...(notes && { notes }) },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    res.status(200).json({
      success: true,
      message: `Application status updated to "${status}"`,
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

// ─── SEED JOBS FROM JSON ─────────────────────────────────────────────────────
// POST /api/careers/seed
exports.seedJobs = async (req, res, next) => {
  try {
    const jobsData = require('../../client/src/data/jobs.json');

    // Map JSON data to match model schema
    const jobsToInsert = jobsData.map((job) => ({
      jobId: job.id,
      title: job.title,
      category: job.category,
      vacancies: job.vacancies,
      workMode: job.workMode,
      engagement: job.engagement,
      commitment: job.commitment,
      compensation: job.compensation,
      description: job.description,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      isActive: true,
    }));

    // Clear existing and insert fresh
    await Job.deleteMany({});
    const jobs = await Job.insertMany(jobsToInsert);

    res.status(201).json({
      success: true,
      message: `Successfully seeded ${jobs.length} jobs into the database`,
      count: jobs.length,
    });
  } catch (error) {
    next(error);
  }
};

// ─── CREATE JOB (Admin) ─────────────────────────────────────────────────────
// POST /api/careers
exports.createJob = async (req, res, next) => {
  try {
    const {
      jobId, title, category, vacancies, workMode,
      engagement, commitment, compensation, description,
      responsibilities, requirements, isActive,
    } = req.body;

    // Check for duplicate jobId
    const existing = await Job.findOne({ jobId });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: `A job with ID "${jobId}" already exists`,
      });
    }

    const job = await Job.create({
      jobId, title, category, vacancies, workMode,
      engagement, commitment, compensation, description,
      responsibilities: responsibilities || [],
      requirements: requirements || [],
      isActive: isActive !== undefined ? isActive : true,
    });

    res.status(201).json({
      success: true,
      message: 'Job created successfully',
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

// ─── UPDATE JOB (Admin) ─────────────────────────────────────────────────────
// PUT /api/careers/:id
exports.updateJob = async (req, res, next) => {
  try {
    const job = await Job.findOneAndUpdate(
      { jobId: req.params.id },
      req.body,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Job updated successfully',
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

// ─── DELETE JOB (Admin) ─────────────────────────────────────────────────────
// DELETE /api/careers/:id
exports.deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findOneAndDelete({ jobId: req.params.id });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found',
      });
    }

    res.status(200).json({
      success: true,
      message: `Job "${job.title}" deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
};

// ─── DELETE APPLICATION (Admin) ──────────────────────────────────────────────
// DELETE /api/careers/applications/:id
exports.deleteApplication = async (req, res, next) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Application deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

