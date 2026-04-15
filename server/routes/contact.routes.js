const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const { validateContact } = require('../middleware/validators');

// ─── Public Routes ───────────────────────────────────────────────────────────

// POST /api/contact           → Submit a contact enquiry
router.post('/', validateContact, contactController.submitEnquiry);

// ─── Admin Routes ────────────────────────────────────────────────────────────

// GET  /api/contact           → Get all enquiries (paginated)
router.get('/', contactController.getAllEnquiries);

// GET  /api/contact/:id       → Get single enquiry by ID
router.get('/:id', contactController.getEnquiryById);

// PUT  /api/contact/:id/status → Update enquiry status
router.put('/:id/status', contactController.updateEnquiryStatus);

// DELETE /api/contact/:id     → Delete an enquiry
router.delete('/:id', contactController.deleteEnquiry);

module.exports = router;
