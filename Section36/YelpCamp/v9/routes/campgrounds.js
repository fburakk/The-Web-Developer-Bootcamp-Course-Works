var express =require("express");
var router = express.Router();

var Campground = require("../models/campground");

// INDEX - show all campgrounds
router.get("/", function(req, res) {
    Campground.find({}, function(err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", { campgrounds: allcampgrounds});
        }
    });
});

// CREATE - add new data to DB
router.post("/", isLoggedIn, function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = { name: name, image: image, description: description, author:author};
    console.log(req.user);
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
            //redirecet back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
    
});

//NEW - show form to create new campgrounds
router.get("/new",isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

//Shows more info about one campground
router.get("/:id", function(req, res) {
    //res.send(req.params.id);
    //console.log("ID: " + req.params.id);
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            //console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    
});

// middleware
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;