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
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => { res.json(user) })
    .catch(err => { res.json(err) })
}

function showProfile(req, res) {
  User.findById(req.user._id)
    .then((user) => {
      res.render('users/profile', {
        user
      })
    })
}

