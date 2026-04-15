const express = require('express');
const router = express.Router();
const careerController = require('../controllers/career.controller');
const upload = require('../middleware/upload');
const { validateApplication } = require('../middleware/validators');

// ─── Static routes MUST come before parameterized routes ─────────────────────

// GET  /api/careers          → Get all active job listings (with optional filters)
router.get('/', careerController.getAllJobs);

// POST /api/careers          → Create a new job (Admin)
router.post('/', careerController.createJob);

// POST /api/careers/apply    → Submit a job application (with optional resume upload)
router.post(
  '/apply',
  upload.single('resume'),
  validateApplication,
  careerController.submitApplication
);

// POST /api/careers/seed     → Seed jobs from client JSON data
router.post('/seed', careerController.seedJobs);

// GET  /api/careers/applications/all  → Get all applications (paginated)
router.get('/applications/all', careerController.getAllApplications);

// PUT  /api/careers/applications/:id/status → Update application status
router.put('/applications/:id/status', careerController.updateApplicationStatus);

// DELETE /api/careers/applications/:id → Delete an application
router.delete('/applications/:id', careerController.deleteApplication);

// ─── Parameterized routes (must be last) ─────────────────────────────────────

// GET  /api/careers/:id      → Get single job by jobId
router.get('/:id', careerController.getJobById);

// PUT  /api/careers/:id      → Update a job (Admin)
router.put('/:id', careerController.updateJob);

// DELETE /api/careers/:id    → Delete a job (Admin)
router.delete('/:id', careerController.deleteJob);

module.exports = router;
