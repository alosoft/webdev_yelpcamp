// var express = require('express');
// var app = express.Router();
// var passport = require('passport');
// var Campground = require('../models/campground');
// var User = require('../models/user');
// var Comment = require('../models/comment');
//
// console.log('routes index');
// ////INCLUDE AUTHENTICATION BUTTON LOGIC
// app.use(function (req, res, next) {
//     res.locals.activeUser = req.user;
//     next();
// });
//
//
// /* GET home page. */
// app.get("/", function (req, res) {
//     res.render("landing");
// });
//
//
// //INDEX - route //show all campgrounds
// app.get("/campgrounds", function (req, res) {
//     console.log(req.user);
//     // get all campgrounds from data base
//     Campground.find({}, function (err, allCampgrounds) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("campgrounds/index",
//                 {
//                     campgrounds: allCampgrounds
//                     // activeUser: req.user
//                 });
//         }
//     });
// });
//
//
// //CREATE - add new campgrounds to database
// app.post("/campgrounds", function (req, res) {
//     // get data from form and add to campground array
//     var name = req.body.name;
//     var image = req.body.image;
//     var description = req.body.description;
//     var newCampground = {name: name, image: image, description: description};
//     //create a new campground and save to database
//     Campground.create(newCampground, function (err, newlyCreated) {
//         if (err) {
//             console.log(err);
//         } else {
//             //redirect back to campgrounds page
//             res.redirect("/campgrounds");
//         }
//     });
// });
//
//
// //NEW - show forms to create campgrounds
// app.get("/campgrounds/new", function (req, res) {
//     // shows the form with input
//     res.render("campgrounds/new");
// });
//
// //SHOW - shows more info about one campground
// app.get("/campgrounds/:id", function (req, res) {
//     //find the campground with provided id
//     Campground.findById(req.params.id).populate('comments').exec(function (err, foundCampground) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("campgrounds/show", {campground: foundCampground});
//             // console.log(foundCampground);
//             //render show template with that campground
//         }
//     });
//     //and then render show template with that campground
// });
//
// //DESTROY ROUTE
// app.delete("/campgrounds/:id", function (req, res) {
//     Campground.findByIdAndRemove(req.params.id, function (err) {
//         if (err) {
//             res.redirect('/campgrounds');
//         } else {
//             res.redirect('/campgrounds');
//         }
//     });
// });
//
// //=================================================
// //COMMENTS ROUTES
// //================================================
// app.get('/campgrounds/:id/comments/new', isLoggedIn, function (req, res) {
//     Campground.findById(req.params.id, function (err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render('comments/new', {campground: campground});
//         }
//     })
// });
//
// app.post('/campgrounds/:id/comments', isLoggedIn, function (req, res) {
//     //lookup campground using ID
//     Campground.findById(req.params.id, function (err, campground) {
//         if (err) {
//             console.log(err);
//             res.redirect('/campgrounds')
//         } else {
//             // var text = req.body.text;
//             // var author = req.body.author;
//             // var newComment = ({text: text, author: author});
//             Comment.create(req.body.comment, function (err, comment) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(req.body.comment);
//                     campground.comments.push(comment);
//                     campground.save();
//                     res.redirect('/campgrounds/' + campground._id);
//                 }
//             });
//         }
//     });
// });
//
// //=====================================
// //AUTHENTICATION ROUTES
// //=====================================
//
// //show register form
// app.get('/register', function (req, res) {
//     res.render('register');
// });
//
// /////////////handle sign up logic////////////////
// app.post('/register', function (req, res) {
//     var newUser = new User({username: req.body.username});
//     User.register(newUser, req.body.password, function (err, user) {
//         if (err) {
//             console.log(err);
//             return res.render('register');
//         }
//         passport.authenticate('local')(req, res, function () {
//             res.redirect('/campgrounds');
//         });
//     });
// });
//
// //show login form
// app.get('/login', function (req, res) {
//     res.render('login');
// });
//
// ///////////////handle login logic//////////////
// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/campgrounds',
//     failureRedirect: '/login'
// }), function (req, res) {
//
// });
//
// /////////////handle logout/////////////
// app.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/campgrounds');
// });
//
//
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }
//
//
// module.exports = app;