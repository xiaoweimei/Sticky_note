var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note;
/* GET users listing. */
router.get('/notes', function(req, res, next) {
	console.log('/notes...')
	var query = {raw: true}
	if(req.session.user && req.session.user){
		query.where = {
			uid: req.session.user.id
		}
	}
	Note.findAll(query).then(function(notes){
		console.log(notes)
		res.send({status:0,data:notes})
	})
});

router.post('/notes/add', function(req, res, next) {
	if(!req.session || !req.session.user){
		console.log(req.session)
		console.log('添加失败，请先登录')
		return res.send({status:1,errorMsg:'请先登录'})
	}
	var uid = req.session.user.id
	var note = req.body.note;
	Note.create({text:note,uid:uid}).then(function(){
		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errorMsg:'数据库异常或你没有权限'})
	})
	console.log('add....',note)
});

router.post('/notes/edit', function(req, res, next) {
	if(!req.session || !req.session.user){
		console.log('编辑失败，请先登录')
		return res.send({status:1,errorMsg:'请先登录'})
	}

	var uid = req.session.user.id
	Note.update({text:req.body.note},{where:{id:req.body.id,uid:uid}}).then(function(){
		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errorMsg:'数据库出错'})
	})
});

router.post('/notes/delete', function(req, res, next) {
	if(!req.session || !req.session.user){
		console.log('删除失败，请先登录')
		return res.send({status:1,errorMsg:'请先登录'})
	}
	console.log(Note)
	var uid = req.session.user.id
	Note.destroy({where:{id:req.body.id,uid:uid}}).then(function(){
		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errorMsg:'数据库出错'})
});
})

module.exports = router;
