const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");


app.use(cors());


//Connection to DB
require("./server/config/mongoos.config");
app.use(express.json(), express.urlencoded({extended: true}));

require("./server/routes/product.routes")(app);

//CConnection to routes
app.listen(port, () => console.log(`Listening on port ${port}!!`));