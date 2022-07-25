const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate name is required"],

    },
    picture: {
        type: String,
        required: [true, "Picture is required"]
    },
    chests: {
        type: Number,
        required: [true, "Number of treasure chests is required"]
    },
    phrase: {
        type: String,
        required: [true, "Catch phrase is required"]
    },
    position: {
        type: String,
        required: [true, "Crew position is required"]
    },
    peg: {
        type: String
    },
    eye: {
        type: String
    },
    hook: {
        type: String
    }
});

//add time stamp
PirateSchema.set("timestamps", true);

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;