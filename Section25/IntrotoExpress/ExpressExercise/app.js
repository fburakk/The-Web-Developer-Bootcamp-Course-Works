var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:nameofAnimal", function(req, res) {
    var nameofAnimal = req.params.nameofAnimal;
    if (nameofAnimal === "dog"){
        res.send("The " + nameofAnimal + " says 'Woof Woof!'");
    }
    else if(nameofAnimal === "cow"){
        res.send("The " + nameofAnimal + " says 'Moo!'");
    }
    else{
        res.send("Sorryi page not found... What are you doing with your life?");

    }
});

app.get("/repeat/:str/:nofPrint", function(req, res) {
    var str = req.params.str;
    var nofPrint = req.params.nofPrint;
    var strOut = [];
    
    for(let i = 0; i < nofPrint; i++){
        strOut += str + " ";
    }
    res.send(strOut);
});

app.get("*", function(req, res) {
    res.send("Sorryi page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("App is Started to Running.");
});