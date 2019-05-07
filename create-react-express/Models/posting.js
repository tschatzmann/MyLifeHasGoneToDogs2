const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postingSchema = new Schema({
    text: {type: String, required: true},
    bone: {type: Number},
    newpaper: {type: Number},
    dogcage: {type: Number},
    date: { type: Date, default: Date.now },
    authorid:{ 
        type: Schema.Types.ObjectId,
        ref:"Author"


     } 

});

const Posting = mongoose.model("Posting", postingSchema);

module.exports = Posting;
