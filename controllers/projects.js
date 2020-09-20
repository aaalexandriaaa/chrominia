const Project = require('../models/project');

module.exports = {
  index,
  userProjectIndex,
  create,
  projectDetails
}

function index(req, res) {
  Project.find({})
    .then(projects => { res.json(projects) })
    .catch(err => { res.json(err) })
}

function userProjectIndex(req, res) {
  Project.find({ user: req.user._id })
    .then(projects => { res.json(projects) })
    .catch(err => { res.json(err) })
}

function create(req, res) {
  req.body.user = req.user._id
  Project.create(req.body)
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}

function projectDetails(req, res) {
  Project.findById(req.params.id)
    .then((project) => { res.json(project) })
    .catch(err => { res.json(err) })
}
