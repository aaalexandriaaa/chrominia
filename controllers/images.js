const Image = require('../models/image');

module.exports = {
  index,
}

function index(req, res) {
  Image.find({})
    .then(images => { res.json(images) })
    .catch(err => { res.json(err) })
}