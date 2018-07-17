var mouseOffsetX, mouseOffsetY; //鼠标相对登录框的坐标
var isdrag = false; //是否拖拽

var mybox=$('#loginbox');
var title=$('#title');
var boxwidth=mybox.width();
var boxheight=mybox.height();

function loginXY() {
	mybox.css({
		left:($(window).width()-boxwidth)/2+'px',
		top:($(window).height()-boxheight)/2+'px'
	})
}

//加载
$(document).ready(function(){
	loginXY();
})

//窗口改变
$(window).resize(function(){
	loginXY();
})

//鼠标按下
title.mousedown(function(e){
	title.css('cursor','move');
	isdrag=true;
	mouseOffsetX=e.pageX-mybox.offset().left;
	mouseOffsetY=e.pageY-mybox.offset().top;
})

//鼠标松开
$(document).mouseup(function(){
	title.css('cursor','pointer');
	isdrag=false;
})

//鼠标拖拽
$(document).mousemove(function(e){
	if(isdrag){
		var moveX = e.pageX - mouseOffsetX; //浮动层的新位置
		var moveY = e.pageY - mouseOffsetY;

		//限制拖拽范围
		var maxX = $(window).width()-boxwidth
		var maxY = $(window).height()-boxheight;

		moveX = Math.min(maxX, Math.max(0, moveX)); //如果moveX<0，moveX=0;如果moveX>maxX，moveX=maxX；
		moveY = Math.min(maxY, Math.max(0, moveY));
		
		mybox.css({
			left:moveX+'px',
			top:moveY+'px'
		})
	}
})

//登录
$('#login').click(function(){
	var user=$('#user').val();
	var pass=$('#password').val();
	var tishi=$('#tishi');
	
	if(user==''){
		tishi.text('用户名不能为空');
	}else if(pass==''){
		tishi.text('密码不能为空');
	}else{
		//ajax
		$.post('/carrots-admin-ajax/a/login',{name:user,pwd:pass},function(data,status){
			var data=JSON.parse(data);
			if(data.message=='success'){
				window.open('http://dev.admin.carrots.ptteng.com/#/dashboard');
			}else{
				tishi.text(data.message);
			}
		})
	}	
})
