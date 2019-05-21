const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postingSchema = new Schema({
    text: { type: String, required: true },
    boneCount: { type: Number },
    newspaperCount: { type: Number },
    cageCount: { type: Number },
    date: { type: Date, default: Date.now },
    authorid: {
        type: Schema.Types.ObjectId,
        ref: "Author"


    }

});

const Posting = mongoose.model("Posting", postingSchema);

module.exports = Posting;
