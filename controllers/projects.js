const Project = require('../models/project');

module.exports = {
  index,
  userProjectIndex,
  create,
  projectDetails,
  update,
  delete: deleteProject,
  addImage,
  addSupply,
  removeSupply,
  removeImage
}

function index(req, res) {
  Project.find({})
    .then(projects => { res.json(projects) })
    .catch(err => { res.json(err) })
}

function userProjectIndex(req, res) {
  Project.find({ user: req.params.id })
    .then(projects => { res.json(projects) })
    .catch(err => { res.json(err) })
}

function create(req, res) {
  req.body.user = req.user._id
  req.body.completed = (req.body.completed === 'true')
  req.body.public = (req.body.public === 'true')
  Project.create(req.body)
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}

function projectDetails(req, res) {
  Project.findById(req.params.id)
    .populate('images')
    .populate('supplies')
    .then((project) => { res.json(project) })
    .catch(err => { res.json(err) })
}

function update(req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}

function deleteProject(req, res) {
  Project.findByIdAndDelete(req.params.id)
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}

function addImage(req, res) {
  Project.findById(req.params.id)
    .then(project => {
      project.images.push(req.body.boop)
      project.save()
      res.json(project)
    })
    .catch(err => { res.json(err) })
}

function addSupply(req, res) {
  Project.findById(req.params.id)
    .then(project => {
      project.supplies.push(req.body.boop)
      project.save()
      res.json(project)
    })
    .catch(err => { res.json(err) })
}

function removeSupply(req, res) {
  Project.findById(req.params.id)
    .then((project) => {
      let idx = project.supplies.indexOf(req.body.boop)
      if (idx > -1) {
        project.supplies.splice(idx, 1)
        project.save()
        res.json(project)
      }
    })
    .catch(err => { res.json(err) })
}

function removeImage(req, res) {
  Project.findById(req.params.id)
    .then((project) => {
      let idx = project.images.indexOf(req.body.boop)
      if (idx > -1) {
        project.images.splice(idx, 1)
        project.save()
        res.json(project)
      }
    })
    .catch(err => { res.json(err) })
}
