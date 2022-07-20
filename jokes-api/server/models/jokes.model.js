const mongoose = require("mongoose");

//create mode
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

JokeSchema.set("timestamps", true);

const Joke = mongoose.model("Joke", JokeSchema);

//export table
module.exports = Joke;

// id, setup, punchline, created at