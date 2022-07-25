const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Authors name is required"],
        minlength: [3, "Authors name must be at least three characters"]
    }
});

//add time stamp
AuthorSchema.set("timestamps", true);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;