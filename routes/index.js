var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   var loginData;
//   if(req.session.user){
//   	loginData= {
//   		isLogin : true,
//   		user:{
//   			avatar:req.session.user.avatar,
//   			username:req.session.user.username
//   		}
//   	}
//   }else{
//   	loginDara = {
//   		isLogin: false
//   	}
//   }
//   res.render('index',loginData)
// });
router.get('/',function(req,res,next){
	if(req.session.user){
		var loginData = {
			isLogin:true,
			user:{
				avatar:req.session.user.avatar,
				username:req.session.user.username
			}
		}	
	}else{
		var loginData = {
			isLogin:false
		}
	}
	res.render('index',loginData)
})

module.exports = router;
