const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/MyLifeDogsDB"
);

mongoose.connect("mongodb://localhost/MyLifeDogsDB", { useNewUrlParser: true, useCreateIndex: true, });

const authorSeed = [
    {
    username: "testseed",
    email: "testseed@gmail.com",
    password: "testseed",
    posting:["5ccda2b0c42fad2b46c1c0b2"]
    }
]