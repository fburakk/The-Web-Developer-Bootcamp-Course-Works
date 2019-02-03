var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, ante vel hendrerit feugiat, lorem lectus dictum lacus, a varius elit risus non urna. Aliquam erat volutpat. Aliquam erat volutpat. Mauris auctor nunc in risus semper pharetra. Nullam tempus odio lacus, vel tincidunt nunc laoreet sed. Maecenas et congue ligula, quis semper elit. Phasellus hendrerit dictum erat a volutpat. Sed aliquam, lorem sed luctus feugiat, turpis diam maximus mi, in scelerisque eros nunc eu lacus."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, ante vel hendrerit feugiat, lorem lectus dictum lacus, a varius elit risus non urna. Aliquam erat volutpat. Aliquam erat volutpat. Mauris auctor nunc in risus semper pharetra. Nullam tempus odio lacus, vel tincidunt nunc laoreet sed. Maecenas et congue ligula, quis semper elit. Phasellus hendrerit dictum erat a volutpat. Sed aliquam, lorem sed luctus feugiat, turpis diam maximus mi, in scelerisque eros nunc eu lacus."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, ante vel hendrerit feugiat, lorem lectus dictum lacus, a varius elit risus non urna. Aliquam erat volutpat. Aliquam erat volutpat. Mauris auctor nunc in risus semper pharetra. Nullam tempus odio lacus, vel tincidunt nunc laoreet sed. Maecenas et congue ligula, quis semper elit. Phasellus hendrerit dictum erat a volutpat. Sed aliquam, lorem sed luctus feugiat, turpis diam maximus mi, in scelerisque eros nunc eu lacus."
    }
];
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;