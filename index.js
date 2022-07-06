var express = require("express");    
var app = express(); 

var mysql = require("mysql2");

var connection = mysql.createConnection(
    {
    host : "localhost",
    port : 3306,
    user : "root",
    password : "1557",
    database : "blockchain",
    }
);

app.set("views",__dirname + "/views");

app.set("view engene", "ejs");


app.use(express.json()); 
app.use(express.urlencoded({extended:false}));  


app.get("/", function(req,res){
    res.render("login.ejs")
})


var user = require("./routes/user")

app.use("/login", user)


var port = 3000
app.listen(port, function(){
    console.log("서버 시작")
})

