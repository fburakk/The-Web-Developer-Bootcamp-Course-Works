var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");
    
mongoose.connect("mongodb://localhost/auth_demo_app", {useNewUrlParser: true});


var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Can Be Anything",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ROUTER
app.get("/", function (req, res) {
    res.render("home");
});

// Auth Router

//show sign up form
app.get("/register", function(req, res) {
    res.render("register");
});
//Handling User Sign Up
app.post("/register", function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    User.register(new User({username: username}), password, function (err, user) {
        if (err) {
            console.log(err);
            res.render("register");
        } else {
            passport.authenticate("local")(req, res, function (/*req, res*/) {
                res.redirect("/secret");
            })
        }
    });
    //res.send("Register Post Route");
})

// LOGIN ROUTES

// render login form
app.get("/login", function(req, res) {
    res.render("login");
});

// login logic
// middleware
app.post("/login",passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});



app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req ,res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server Started");
});