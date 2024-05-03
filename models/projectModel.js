// models/projectModel.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  status:{
    type: String,
  },
  type: {
    type: String,
    default: null,
    required: true,
  },
  developer: {
    type: String,
    default: null,
  },
  company:{
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  area: {
    type: Number,
    default: null,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  // New field to reference an array of user IDs
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
