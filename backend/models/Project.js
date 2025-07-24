const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  githubUrl: { type: String },
  liveUrl: { type: String },
  techStack: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema); 