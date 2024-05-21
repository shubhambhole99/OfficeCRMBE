// routes/projectRoutes.js
const express = require('express');
const projectController = require('../controller/projectController');
const { isAuthenticated, authorizeRoles } = require('../middleware/Auth');

const router = express.Router();

router.put('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/create', projectController.createProject);
router.put('/:id', projectController.updateProject);
router.delete('/:id', isAuthenticated,authorizeRoles('admin'),projectController.deleteProject);

module.exports = router;