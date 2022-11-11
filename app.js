const express = require("express");
const ejs = require("ejs");

const app = express();

const items = [];

//date

const d = new Date();
let theDate = d.toLocaleString("en-US",{dateStyle:"full"});


app.set("view engine","ejs")
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.render("list",{newItems: items,today: theDate});
})

app.post("/", function(req,res){
    items.push(req.body.newItem);
    res.redirect("/");

})

app.listen("3000", function(){
    console.log("Server Running Sucessfully");
})