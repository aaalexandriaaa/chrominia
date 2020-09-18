const User = require('../models/user');

module.exports = {
  index,
}

function index(req, res) {
  Recipe.find({})
    .then(recipes => { res.json(recipes) })
    .catch(err => { res.json(err) })
}