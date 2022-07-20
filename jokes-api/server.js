const express = require("express");
const app = express();
const port = 8000;

//add this after making mongoose.config
require("./server/config/mongoose.config");

// This line allows us to work with post data
app.use(express.json(), express.urlencoded({extended: true}));

// must be after parsing route
const AllMyRoutes = require("./server/routes/joke.routes"); AllMyRoutes(app);


app.listen(port, () => console.log(`Running on port ${port}!!`))