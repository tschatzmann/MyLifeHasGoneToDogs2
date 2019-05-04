const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postingSchema = new Schema({
    text: {type: String, required: true},
    waggingTail: {type: Number},
    peeingDog: {type: Number},
    poopingDog: {type: Number},
    date: { type: Date, default: Date.now }
});

const Posting = mongoose.model("Posting", postingSchema);

module.exports = Posting;
