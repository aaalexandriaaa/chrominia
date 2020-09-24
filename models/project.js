const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new mongoose.Schema({
  content: String
})

const projectSchema = new mongoose.Schema({
  public: Boolean,
  name: String,
  description: String,
  hobby: String,
  dateStarted: String,
  targetDate: String,
  completed: Boolean,
  notes: [noteSchema],
  supplies: [{
    type: Schema.Types.ObjectId,
    ref: 'Supply'
  }],
  images: [{
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Project', projectSchema);