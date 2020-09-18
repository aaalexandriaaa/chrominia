const Supply = require('../models/supply');

module.exports = {
  index,
}

function index(req, res) {
  Supply.find({})
    .then(supplies => { res.json(supplies) })
    .catch(err => { res.json(err) })
}