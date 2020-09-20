const Project = require('../models/project');

module.exports = {
  index,
  create
}

function index(req, res) {
  Project.find({})
    .then(projects => { res.json(projects) })
    .catch(err => { res.json(err) })
}

function create(req, res) {
  req.body.user = req.user._id
  Project.create(req.body)
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}