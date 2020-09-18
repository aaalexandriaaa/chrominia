const Project = require('../models/project');

module.exports = {
  index,
}

function index(req, res) {
  Project.find({})
    .then(projects => { res.json(projects) })
    .catch(err => { res.json(err) })
}