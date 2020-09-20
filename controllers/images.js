const Image = require('../models/image');

module.exports = {
  index,
  create,
  indexForUser
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
  console.log('HIT CONTROLLER')
  Image.find({user: req.user._id})
    .then((images) =>{ res.json(images)})
    .catch(err => { res.json(err) })
}