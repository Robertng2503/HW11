const express = require("express");
const path = require("path");

const app = express();

// MIDDLEWARES
app.use(express.static("public"))

// app.get("/assets/css/styles.css", (req,res) => {
//     res.sendFile(path.join(__dirname,"./public/assets/css/styles.css" ))
// })


// ROUTES
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"./public/index.html" ))
})

app.get("/api/notes",(req,res) =>{
    res.sendFile(path.join(__dirname,"./db/db.json") )
})


app.listen(3001, function() {
    console.log("Server has started!")
})