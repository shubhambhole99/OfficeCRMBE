const express = require('express');
const router = express.Router();
const correspondenceController = require('../controller/correspondenceController');

// Create a new correspondence
router.post('/', correspondenceController.createCorrespondence);

// Get all correspondences
router.get('/correspondences', correspondenceController.getAllCorrespondences);

// Get a single correspondence by ID
router.get('/correspondences/:id', correspondenceController.getCorrespondenceById);

// Update a correspondence by ID
router.put('/correspondences/:id', correspondenceController.updateCorrespondence);

// Delete a correspondence by ID
router.delete('/correspondences/:id', correspondenceController.deleteCorrespondence);

module.exports = router;
