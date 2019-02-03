var express = require("express");
var app = express();

// "/" => "Hi There"
app.get("/", function(req, res) {
    res.send("Hi There!");
});

// "bye" => "Goodbye"
app.get("/bye", function(req, res) {
    res.send("Bye!");
    // body...
});

// "dog" => "MEOW"
app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
res.send("Welcome To " + req.params.subredditName.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
   res.send("welcome to comments page");
});

app.get("*", function(req, res) {
    res.send("You are a Star");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("App Started!");
    console.log(process.env.PORT, process.env.IP);
});
