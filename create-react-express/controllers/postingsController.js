const db = require("../models");

// Defining methods for the PostingsController
module.exports = {
  findAll: function(req, res) {
    console.log("in postings find all")
    console.log(req.query)
    db.Posting
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Posting
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('rea.body', req.body);
    db.Posting
      .create(req.body)
      .then(dbModel => {
        console.log('the db model', dbModel);
        db.Author.findOneAndUpdate({_id: req.params.id}, { $push: { postings: dbModel._id } }, { new: true });  
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log('req.body', req.body)
    db.Posting
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Posting
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getPopulatePostings: function(req,res) {
    console.log("in populate")
    console.log(req.params)
    db.Posting.find({authorid: req.params.id})
    // Specify that we want to populate the retrieved users with any associated notes
   // .populate("postings")
    .then(function(dbModel) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      res.json(dbModel);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  },
};
