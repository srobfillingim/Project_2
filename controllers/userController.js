// node packages
var express = require('express');
var passport = require('passport');
var fs = require("fs")

var request = require('request');

// setup router
var router = express.Router();



router.get('/keyword', function (req, res) {
	var data = {
		title: 'roadTrips',
	}

	if (req.isAuthenticated()) {
		res.redirect('/user');
	} else {
		// getTweets.then( function(tweetsList){
		// 	// passing tweets to handlebars page
		// 	data.tweets = tweetsList;
		res.render('index', data);
		//});
	}
});

//pp - user route path changed from /user to /api/user to display Traveler
//Travelers
router.route('/sign-up')
	.get(function (req, res) {
		res.render('sign-up', { title: 'Traveler - Sign Up' });
	})
	.post(passport.authenticate('local-signup', {
		successRedirect: '/api/user',
		failureRedirect: '/sign-up'
	}));

router.route('/login')
	.get(function (req, res) {
		res.render('login', { title: 'Travelers - Login' });
	})
	.post(passport.authenticate('local-login', {
		successRedirect: '/api/user',
		failureRedirect: '/login'
	}));

router.get('/logout', function (req, res) {
	req.session.destroy(function (err) {
		res.redirect('/');
	});
});

router.get('/user', isLoggedIn, function (req, res) {
	res.render('user', { title: 'Travelers - ' + req.user.username, username: req.user.username })
});

module.exports = router;

// function to test if user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}