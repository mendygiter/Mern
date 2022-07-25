const PirateController = require("../controllers/pirate.controllers");

module.exports = app => {
    //create
    app.post("/api/pirate/create", PirateController.createOne);

    //read all
    app.get("/api/pirate/readall", PirateController.findAll);

    //read one
    app.get("/api/pirate/readone/:_id", PirateController.findOne);

    //update
    app.put("/api/pirate/update/:_id", PirateController.updatePirate);

    //delete
    app.delete("/api/pirate/delete/:_id", PirateController.deletePirate);
}