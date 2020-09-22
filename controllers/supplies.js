const Supply = require('../models/supply');

module.exports = {
  index,
  create,
  addWishList,
  indexForUser,
  getWishList,
  wishList,
  ownSupply,
  delete: deleteOne
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

function addWishList(req, res){
  req.body.user = req.user._id
  req.body.own = false
  Supply.create(req.body)
    .then(supply => { res.json(supply) })
    .catch(err => { res.json(err) })
}

function indexForUser(req, res){
  Supply.find({user: req.user._id, own: true})
    .then((supplies) => { res.json(supplies)})
    .catch(err => {res.json(err)})
}

function getWishList(req, res){
  Supply.find({user: req.user._id, own: false})
    .then((wishList) => { res.json(wishList)})
    .catch(err => {res.json(err)})
}

function wishList(req, res){
  req.body.own = false
  Supply.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((supply) => { res.json(supply)})
  .catch(err => {res.json(err)})
}

function ownSupply(req, res){
  req.body.own = true
  Supply.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((supply) => { res.json(supply)})
  .catch(err => {res.json(err)})
}

function deleteOne(req, res){
  Supply.findByIdAndDelete(req.params.id)
  .then(movie => {res.json(movie)})
  .catch(err => {res.json(err)})
}
