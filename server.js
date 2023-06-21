const express = require("express");
const path = require("path");

const app = express();

// routes

// GET ROUTES

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./public/index.html" ))
})


app.listen(3001, function() {
    console.log("Server has started!")
})