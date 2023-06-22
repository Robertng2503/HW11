const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");

const app = express();

// MIDDLEWARES
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// app.get("/assets/css/styles.css", (req,res) => {
//     res.sendFile(path.join(__dirname,"./public/assets/css/styles.css" ))
// })


// ROUTES
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})
app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"./public/index.html" ))
})

app.get("/api/notes",(req,res) =>{
    res.sendFile(path.join(__dirname,"./db/db.json") )
})

app.post("/api/notes", (req, res) => {
    console.log(req.body)

    console.log(db);

    db.push({
        title: req.body.title,
        text: req.body.text
    })


    console.log(db);

    fs.writeFile("./db/db.json", JSON.stringify(db), function(err) {
        if(err) console.log(err);
        res.send("test")
    })
})


app.listen(3001, function() {
    console.log("Server has started!")
})