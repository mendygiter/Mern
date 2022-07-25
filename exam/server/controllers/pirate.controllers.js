const Pirate = require("../models/pirate.models");

//Create
module.exports.createOne = (req, res) => {
    Pirate.create(req.body)
        .then(addOne => res.json(addOne))
        .catch(err => res.json({message: "Error adding one Pirate", error: err}))
}

//Read all
module.exports.findAll = (req, res) => {
    Pirate.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({message: "Error finding all Pirate", error: err}))
}

//Read One
module.exports.findOne = (req, res) => {
    Pirate.find({_id: req.params._id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Error finding one Pirate", error: err}))
}
//Update
module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params._id}, req.body, {new:true})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Error updating one Pirate", error: err}))
}

//Delete
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params._id})
        .then(res.json({message: "Author deleted"}))
        .catch(err => res.json({message: "Error deleting one Pirate", error: err}))
}