const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Product name must be at least two characters"]
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1.00, "Product name must be at least one dollar"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Product name must have a description"]
    }
});

ProductSchema.set("timestamps", true);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;