const Joke = require("../models/jokes.model");

//Create
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "something went wrong when creating a joke",
        error: err}))
}

//Read one
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then((singleJoke => res.json(singleJoke)))
        .catch(err => res.json({message: "Something went wrong when finding one joke",
        error: err}))
}

///Read all
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then((allJoke => res.json(allJoke)))
        .catch(err => res.json({message: "Something went wrong when finding all jokes",
            error: err}))
}

//Update
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then((updateJoke => res.json(updateJoke)))
        .catch(err => res.json({
            message: "Something went wrong when updating one joke",
            error: err
        }))
}


//Delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then((deleteJoke => res.json(deleteJoke)))
        .catch(err => res.json({
            message: "Something went wrong when deleting joke",
            error: err
        }))
}

//Random joke
module.exports.randomJoke = (req,res) => {
    Joke.aggregate([{$sample: {size: 1}}])
        .then((randomJoke => res.json(randomJoke)))
        .catch(err => res.json({
            message: "something went wrong when finding a random joke",
            error: err
        }))
}
