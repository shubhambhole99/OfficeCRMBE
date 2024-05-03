// routes/projectRoutes.js
const express = require('express');
const projectController = require('../controller/projectController');

const router = express.Router();

router.put('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/create', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;