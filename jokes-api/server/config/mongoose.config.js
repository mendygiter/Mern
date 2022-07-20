const mongoose = require("mongoose");

// connect to database
mongoose.connect("mongodb://localhost/mongo_assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("I found the mongoose"))
.catch(err => console.log("I lost the mongoose", err))