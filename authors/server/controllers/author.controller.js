const Author = require("../models/author.models");

//Create
module.exports.createOne = (req, res) => {
    Author.create(req.body)
        .then(addOne => res.json(addOne))
        .catch(err => res.json({message: "Error adding one Author", error: err}))
}

//Read all
module.exports.findAll = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({message: "Error finding all Authors", error: err}))
}

//Read One
module.exports.findOne = (req, res) => {
    Author.find({_id: req.params._id})
    .then(oneAuthor => res.json(oneAuthor))
    .catch(err => res.json({message: "Error finding one Author", error: err}))
}
//Update
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params._id}, req.body, {new:true,runValidators:true})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Error updating one author", error: err}))
}

//Delete
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(res.json({message: "Author deleted"}))
        .catch(err => res.json({message: "Error deleting one Author", error: err}))
}