const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/rreactpostings"
);

const postingSeed = [
    {
    text: "my Hybird is dying with less than 28,000 miles",
    waggingTail: 1,
    peeingDog: 3,
    poopingDog: 8,
    author: "schatzmann"
    }
]