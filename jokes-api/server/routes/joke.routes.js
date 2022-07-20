const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    // create
    app.post("/api/jokes/create", JokeController.createJoke);

    //Read one
    app.get("/api/jokes/:_id", JokeController.findOneJoke);

    //Read all
    app.get("/api/jokes", JokeController.allJokes);

    //Update
    app.put("/api/jokes/update/:_id", JokeController.updateJoke);

    //Delete
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);

    //random
    app.get("/api/jokes/random/jokes", JokeController.randomJoke);
}
