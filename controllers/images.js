const Image = require('../models/image');

module.exports = {
  index,
  create,
  indexForUser,
  getOne,
  delete: deleteOne,
  update
}

function index(req, res) {
  Image.find({})
    .then(images => { res.json(images) })
    .catch(err => { res.json(err) })
}

function create(req, res) {
  req.body.user = req.user._id
  Image.create(req.body)
      .then(image => { res.json(image) })
      .catch(err => { res.json(err) })
}

function indexForUser(req, res){
  Image.find({user: req.params.id})
    .then((images) =>{ res.json(images)})
    .catch(err => { res.json(err) })
}

function getOne(req, res){
  Image.findById(req.params.id)
    .then((image) =>{ res.json(image)})
    .catch(err => { res.json(err) })
}

function deleteOne(req, res) {
  Image.findByIdAndDelete(req.params.id)
  .then(movie => {res.json(movie)})
  .catch(err => {res.json(err)})
}

function update(req, res) {
  Image.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(image => {res.json(image)})
  .catch(err => {res.json(err)})
}