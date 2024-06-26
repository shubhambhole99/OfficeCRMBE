const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  description:{
    type: String,
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project',
  }],
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
