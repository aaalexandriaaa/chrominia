const User = require("../models/user");

module.exports = {
  index,
  update
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function update(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => { res.json(user) })
    .catch(err => { res.json(err) })
}