require('less/index.less');

var NoteManager=require('mod/note-manager.js').NoteManager;
var Event=require('mod/event.js');
var WaterFall=require('mod/waterfall.js');

NoteManager.load();//加载所有数据

$('.add-note').on('click',function(){
	//点击添加按钮，调用添加
	NoteManager.add();
})

Event.on('waterfall',function(){
	//事件听到waterfall的时候，执行一次瀑布流
	WaterFall.init($('#content'))
})