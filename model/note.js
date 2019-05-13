var path=require('path')

var Sequelize = require('sequelize')

var sequelize = new Sequelize(undefined,undefined,undefined,{
	host:'localhost',
	dialect:'sqlite',

	storage: path.join(__dirname,'../database/database.sqlite')
});


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
//   
// 1 hello 创建时间 更新时间
const Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
  uid:{
  	type: Sequelize.STRING
  }
});
// Note.drop()
Note.sync()
// Note.sync().then(function(){
// 	Note.create({text:'hello world'})
// }).then(function(){
// 	Note.findAll({raw:true}).then(notes => {
//   	console.log(notes)
// })
// // });

// Note.findAll({raw:true,where:{id:2}}).then(function(notes){
// 	console.log(notes)
// })
module.exports.Note=Note;