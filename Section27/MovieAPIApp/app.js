var express = require("express");
var app = express();
app.set("view engine", "ejs");

var request = require("request");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function(req, res) {
    var key = req.query.search;
    request("http://www.omdbapi.com/?s=" + key + "&apikey=thewdb", function(error, response, body) {
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data:data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie App has started!!!");
});