const db = require("../models");

// Defining methods for the AuthorsController


module.exports = {
  findAll: function(req, res) {
    db.Author
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  findById: function(req, res) {
    db.Author
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.Author
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
      },
  update: function(req, res) {
    db.Author
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Author
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
