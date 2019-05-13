var express = require('express');
var router=express.Router();
var passport = require('passport');
var GitHubStrategy= require('passport-github').Strategy;

passport.serializeUser(function(user,done){
	console.log('---serializeUser---')
	done(null,user);
});

passport.deserializeUser(function(obj,done){
	console.log('---deserializeUser---')
	console.log(obj)
	done(null,obj);
});

passport.use(new GitHubStrategy({
	clientID:'533faf4f964c8d83c75a',
	clientSecret:'4ba6dbc7ad758eec3412a8c173df0b2febf068eb',
	callbackURL:'http://127.0.0.1:3000/auth/github/callback',
	},
	function(accessToken, refreshToken, profile, done) {
		done(null,profile);
    	}
));

router.get('/github',
	passport.authenticate('github'));
router.get('/github/callback',
	passport.authenticate('github',{failureRedirect:'/'}),
	function(req,res){
		console.log('seccess.......')
		console.log(req.user);
		req.session.user = {
			id: req.user._json.id,
			username:req.user._json.login,
			avatar:req.user._json.avatar_url,
			provider:req.user.provider
		};
		res.redirect('/');
	});

router.get('/logout',function(req,res){
	req.session.destroy()
	res.redirect('/')
})
module.exports=router;