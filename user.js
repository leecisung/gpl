var express = require("express")
var router = express.Router()

var mysql = require("mysql2")
var connection = mysql.createConnection(
    {
    host : "localhost",
    port : 3306,
    user : "root",
    password : "1557",
    database : "blockchain",
    }
)

router.post("/", function(req, res) {
    var input_id = req.body._id
    var input_pass = req.body._pass
    console.log(input_id. input_pass)
    connection.query( 
        `select * from user_info where user_id= ? and user_pass = ?`,
        [input_id, input_pass],
        function(err, result) {
            if(err) { 
                console.log(err);
                res.send("sql error");
            }else {
                if(result.length > 0) { 
                    res.render("main.ejs");
                }else {
                    res.send("login failed"); 
                }
            }
        }
    )
    
})

module.exports = router