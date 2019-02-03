var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    Campground      = require("./models/campground.js"),
    seedDB          = require("./seeds.js");
    
seedDB();

mongoose.connect("mongodb://localhost/yelp_camp_v3", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");



/*
Campground.create({
    name: "First Camp",
    image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=890e75a342e46be601584be1318ba5db&w=1000&q=80",
    description: "Description of First Camp"
}, function(err, campground){
    if (err) {
        console.log(err);
    } else {
        console.log("Newly Campground added to database");
        console.log(campground);
    }
});
*/

app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { campgrounds: allcampgrounds });
        }
    })
    
});

// CREATE - add new data to DB
app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = { name: name, image: image, description: description };
    
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
        }
    });
    
    //redirecet back to campgrounds page
    res.redirect("/campgrounds");

});

//NEW - show form to create new campgrounds
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//Shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //res.send(req.params.id);
    //console.log("ID: " + req.params.id);
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            res.render("show", {campground: foundCampground});
        }
    });
    
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