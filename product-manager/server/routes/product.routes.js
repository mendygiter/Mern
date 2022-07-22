const ProductController = require("../constrollers/product.controller");

module.exports = app => {
    //create
    app.post("/api/product/create", ProductController.createOne);

    //read all
    app.get("/api/product", ProductController.findAll);

    //read one
    app.get("/api/product/:_id", ProductController.findOne);

    //update
    app.put("/api/product/update/:_id", ProductController.updateProduct);

    //delete
    app.delete("/api/product/:_id", ProductController.deleteProduct);
}