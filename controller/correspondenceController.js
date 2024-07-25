const Correspondence = require('../models/correspondence');

// Create a new correspondence
const createCorrespondence = async (req, res) => {
  try {
    const {  project, subject,description, next, previous,files} = req.body;
    //////////////console.log(project, subject,description, next, previous,files)

    const correspondence = new Correspondence({
      project,
      subject,
      description,
      next,
      previous,
    });
    const newCorrespondence = await correspondence.save();
    res.status(201).json({newCorrespondence});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all correspondences
const getAllCorrespondences = async (req, res) => {
  try {
    const correspondences = await Correspondence.find();
    res.json(correspondences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single correspondence by ID
const getCorrespondenceById = async (req, res) => {
  try {
    const correspondence = await Correspondence.findById(req.params.id);
    if (!correspondence) {
      return res.status(404).json({ message: 'Correspondence not found' });
    }
    res.json(correspondence);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a correspondence by ID
const updateCorrespondence = async (req, res) => {
  try {
    const { name, project, description, next, previous, type } = req.body;
    const correspondence = await Correspondence.findById(req.params.id);
    if (!correspondence) {
      return res.status(404).json({ message: 'Correspondence not found' });
    }
    correspondence.name = name;
    correspondence.project = project;
    correspondence.description = description;
    correspondence.next = next;
    correspondence.previous = previous;
    correspondence.type = type;
    const updatedCorrespondence = await correspondence.save();
    res.json(updatedCorrespondence);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a correspondence by ID
const deleteCorrespondence = async (req, res) => {
  try {
    const correspondence = await Correspondence.findById(req.params.id);
    if (!correspondence) {
      return res.status(404).json({ message: 'Correspondence not found' });
    }
    await correspondence.remove();
    res.json({ message: 'Correspondence deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createCorrespondence,
  getAllCorrespondences,
  getCorrespondenceById,
  updateCorrespondence,
  deleteCorrespondence
};
