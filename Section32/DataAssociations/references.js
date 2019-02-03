var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post.js");
var User = require("./models/user.js")



/*
User.create({
    email: "bob@asdmail.com",
    name: "Bob Belcher"
});
*/

/*
Post.create({
    title: "How to cook best burger pt. 4",
    content: "blah blah blah blah blah"
}, function (err, post) {
    console.log(post);
    User.findOne({email: "bob@asdmail.com"}, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("===============");
                    console.log(data);
                }
            });
        }
    });
});
*/

/*
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function (err, user) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});
*/




