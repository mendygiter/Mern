const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    //create
    app.post("/api/author/create", AuthorController.createOne);

    //read all
    app.get("/api/author/readall", AuthorController.findAll);

    //read one
    app.get("/api/author/readone/:_id", AuthorController.findOne);

    //update
    app.put("/api/author/update/:_id", AuthorController.updateAuthor);

    //delete
    app.delete("/api/author/delete/:_id", AuthorController.deleteAuthor);
}