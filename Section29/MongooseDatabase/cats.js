var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// add new cat to database
/*
//1.st Method to add data to DB
var george = new Cat({
    name: "Norris",
    age: 7,
    temperament: "Grouchy"
});

george.save(function(err, cat) {
    if (err) {
        console.log("Something Wrong");
    } else {
        console.log("We just saved a cat to db:");
        console.log(cat);
    }
});
*/

//2.nd Method to add data to DB
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland",
}, function(err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from DB and console.log each
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Error!!!");
    } else {
        console.log("All the cats");
        console.log(cats);
    }
})



