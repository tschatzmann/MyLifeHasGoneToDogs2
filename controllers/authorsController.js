const db = require("../models");

// Defining methods for the AuthorsController


module.exports = {
  findAll: function (req, res) {
    db.Author
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  findOne: function (req, res) {
    db.Author
      .findOne({ username: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch((err) => {
        console.log(err)
        res.status(404).json({ usernotfound: "User not found" })
      })
  },
  getAuthorsPopulatePostings: function (req, res) {
    db.Author.find({})
      // Specify that we want to populate the retrieved users with any associated notes
      .populate("postings")
      .then(function (dbModel) {
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbModel);
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  },

  create: function (req, res) {
    db.Author
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json({ usernotsaved: "user was not saved" }));
  },
  update: function (req, res) {
    db.Author
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Author
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json({ usernotsaved: "user was not deleted" }));
  }
};