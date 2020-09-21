const Supply = require('../models/supply');

module.exports = {
  index,
  create,
  indexForUser
}

function index(req, res) {
  Supply.find({})
    .then(supplies => { res.json(supplies) })
    .catch(err => { res.json(err) })
}

function create(req, res){
  req.body.user = req.user._id
  req.body.own = true
  Supply.create(req.body)
    .then(supply => { res.json(supply) })
    .catch(err => { res.json(err) })
}

function indexForUser(req, res){
  Supply.find({user: req.user._id})
    .then((supplies) => { res.json(supplies)})
    .catch(err => {res.json(err)})
}
