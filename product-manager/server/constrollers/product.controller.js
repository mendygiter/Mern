const Product = require("../models/product.models");

//Create
module.exports.createOne = (req, res) => {
    Product.create(req.body)
        .then(addOne => res.json(addOne))
        .catch(err => res.json({message: "Error adding one product", error: err}))
}

//Read all
module.exports.findAll = (req, res) => {
    Product.find(req.body)
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "Error finding all products", error: err}))
}

//Read one
module.exports.findOne = (req, res) => {
    Product.find({_id: req.params._id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Error finding one product", error: err}))
}

//Update
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: "Error updating one product", error: err}))
}

//Delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
        .then(res.json({message: "Product deleted"}))
        .catch(err => res.json({message: "Error deleting one product", error: err}))
}
