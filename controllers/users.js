const User = require("../models/user");

module.exports = {
  index,
  update,
  show: showProfile
};

function index(req, res) {
  console.log("req.user", req.user);
  User.find({}).then((users) => res.json(users));
}

function update(req, res) {
  console.log("update", req.body)
//   User.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(user => { res.json(user) })
//     .catch(err => { res.json(err) })
}

function showProfile(req, res) {
  console.log("req.params.id", req.params.id);
  User.findById(req.params.id)
    .then(user => { res.json(user) })
    .catch(err => { res.json(err) })
}

