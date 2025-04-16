const mongoose = require("mongoose");

const startTime = Date.now(); //Start time of the script

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrIParser: true,
    useUnifiedTopology: true
})
.then(() => {
    const endTime = Date.now(); //End time of the script
    console.log("Connected to MongoDB successfully!");
    console.log('Connection time: ${(endTime - startTime} ms');
})
.catch(err => console.error("Error:", err));
