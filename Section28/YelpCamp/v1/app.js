var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var campgrounds = [
    { name: "Salmon Creek1", image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=890e75a342e46be601584be1318ba5db&w=1000&q=80" },
    { name: "Grantine Hill", image: "https://vignette.wikia.nocookie.net/battlefordreamisland/images/c/c4/Manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg/revision/latest?cb=20180311032918" },
    { name: "Salmon Creek3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDv98w2qYg85tGoiA1V4AE-ZOVIp4hFUggj5SfdTnpHCTT3CSZYw" },
    { name: "Salmon Creek1", image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=890e75a342e46be601584be1318ba5db&w=1000&q=80" },
    { name: "Grantine Hill", image: "https://vignette.wikia.nocookie.net/battlefordreamisland/images/c/c4/Manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg/revision/latest?cb=20180311032918" },
    { name: "Salmon Creek3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDv98w2qYg85tGoiA1V4AE-ZOVIp4hFUggj5SfdTnpHCTT3CSZYw" },
    { name: "Salmon Creek1", image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=890e75a342e46be601584be1318ba5db&w=1000&q=80" },
    { name: "Grantine Hill", image: "https://vignette.wikia.nocookie.net/battlefordreamisland/images/c/c4/Manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg/revision/latest?cb=20180311032918" },
    { name: "Salmon Creek3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDv98w2qYg85tGoiA1V4AE-ZOVIp4hFUggj5SfdTnpHCTT3CSZYw" }
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };
    campgrounds.push(newCampground);
    //redirecet back to campgrounds page
    res.redirect("/campgrounds");

});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");

});

/*
app.get("", function(req, res) {
    // body...
});

app.get("", function(req, res) {
    // body...
});
*/

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started");
});