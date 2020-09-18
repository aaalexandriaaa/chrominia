const Project = require('../models/project');

module.exports = {
  index,
}

function index(req, res) {
  Note.find({})
    .then(notes => { res.json(notes) })
    .catch(err => { res.json(err) })
}