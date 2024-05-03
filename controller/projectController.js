// controllers/projectController.js
const Project = require('../models/projectModel');

async function getAllProjects(req, res) {
  try {
    const {company,status}=req.body
    const projectFilter = {};
    if(company){
      projectFilter.company = company;
    }
    if(status){
      projectFilter.status = status;
    }
   

    // console.log(projectFilter)
    const projects = await Project.find(projectFilter);
    // console.log(projects)
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getProjectById(req, res) {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createProject(req, res) {
  const newProject = req.body;
  try {
    const createdProject = await Project.create(newProject);
    res.json({ message: 'Project created successfully', project: createdProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateProject(req, res) {
  //console.log('updateProject');
  const id = req.params.id;
  const newData = req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(id, newData);
    if (updatedProject) {
      res.json({ message: 'Project updated successfully', project: updatedProject });
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteProject(req, res) {
  //console.log('deleteProject');
  const id = req.params.id;
  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (deletedProject) {
      res.json({ message: 'Project deleted successfully' });
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
