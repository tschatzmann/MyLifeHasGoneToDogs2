const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "username is required",
    unique: true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address."]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required.",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  // `postings` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the Postings model
  // This allows us to populate the User with any associated Postings
  postings: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Post"
    }
  ]

});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;