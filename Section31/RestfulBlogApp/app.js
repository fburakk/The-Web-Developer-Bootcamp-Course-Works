var expressSanitizer    = require("express-sanitizer"), 
    methodOverride      = require("method-override"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    express             = require("express"),
    app                 = express();
    
mongoose.connect("mongodb://localhost/restful_blog_app");

//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: 
    {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

/*
Blog.create({
    title:"Test Blog",
    image:"https://s-i.huffpost.com/gen/4187668/thumbs/o-GROS-MORNE-CAMPING-570.jpg",
    body: "Hello this is a blog post"
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Write to blog is Success!!!");
    }
});
*/


// RESTful ROUTES


app.get("/", function (req, res) {
    res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function (req, res) {
    var blogs = Blog.find({}, function (err, blogs) {
        if (err) {
            console.log(err)
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW ROUTE
app.get("/blogs/new", function (req, res) {
    res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function (req, res) {
    //console.log(req.body);
    req.body.blog.body = req.sanitize(req.body.blog.body);
    //console.log("===========")
    //console.log(req.body);
    let data = req.body.blog;
    Blog.create(data, function (err, newBlog) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/blogs");
        }
    });
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
    
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs")
        } else {
            res.render("edit", {blog:foundBlog});
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog) {
        if (err) {
            console.log("erroe while update");
            console.log(err);
            res.redirect("/blogs");
        } else {
            console.log(updatedBlog);
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete("/blogs/:id", function (req, res) {
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Blog App is Started");
});
