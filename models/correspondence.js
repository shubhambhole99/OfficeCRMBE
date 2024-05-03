const mongoose = require('mongoose');
const { Schema } = mongoose;

const correspondence = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref:'project'
  },
  subject:{
    type:String,
  },
  description:{
    type: String,
  },
  next:{
    type:Schema.Types.ObjectId,
    default:null

  },
  previous:{
    type:Schema.Types.ObjectId,
    default:null
  },
  createdAt:{
    type:Date,
    createdAt:Date.now()
  },
  files:[{
    type:String
  }]

});

const Contact = mongoose.model('Correspondence', correspondence);

module.exports = Contact;
