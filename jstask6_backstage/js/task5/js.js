var mouseOffsetX, mouseOffsetY; //鼠标相对登录框的坐标
var isdrag = false; //是否拖拽

//获取元素对象
function getid(id) {
	return document.getElementById(id);
}

var mybox = getid('loginbox');
var titlebox = getid('title');
var user = getid('user');
var mypass = getid('password');
var login = getid('login');
var tishi = getid('tishi');

function loginXY() {
	mybox.style.left = (document.documentElement.clientWidth - mybox.offsetWidth) / 2 + 'px';
	mybox.style.top = (document.documentElement.clientHeight - mybox.offsetHeight) / 2 + 'px';
}

//鼠标按下
titlebox.onmousedown = function(e) {
	e = e || window.event;
	titlebox.style.cursor = 'move';
	isdrag = true;
	mouseOffsetX = e.pageX - mybox.offsetLeft; //鼠标相对浮动层的坐标
	mouseOffsetY = e.pageY - mybox.offsetTop;
}

//鼠标松开
document.onmouseup = function() {
	titlebox.style.cursor = 'pointer';
	isdrag = false;
}

//拖拽
document.onmousemove = function(e) {
	e = e || window.event;
	if(isdrag) {
		var moveX = e.pageX - mouseOffsetX; //浮动层的新位置
		var moveY = e.pageY - mouseOffsetY;

		//限制拖拽范围
		var maxX = document.documentElement.clientWidth - mybox.offsetWidth;
		var maxY = document.documentElement.clientHeight - mybox.offsetHeight;

		moveX = Math.min(maxX, Math.max(0, moveX)); //如果moveX<0，moveX=0;如果moveX>maxX，moveX=maxX；
		moveY = Math.min(maxY, Math.max(0, moveY));

		mybox.style.left = moveX + 'px';
		mybox.style.top = moveY + 'px';
	}
}

window.onload = function() {
	loginXY();
}

window.onresize = function() {
	loginXY();
}

login.onclick = function() {
	var username = user.value;
	var passwords = mypass.value;
	
	if(username==''){
		tishi.innerHTML='用户名不能为空'
	}else if(passwords==''){
		tishi.innerHTML='密码不能为空'
	}else{
		
		//表单数据
		var myform = new FormData();
		myform.append('name', username);
		myform.append('pwd', passwords);
		
		//ajax
		var xhr = new XMLHttpRequest();
	
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					var text = JSON.parse(xhr.responseText);
					if(text.message == 'success') {
						window.location.href = 'http://dev.admin.carrots.ptteng.com/#/dashboard';
					} else {
						tishi.innerHTML = text.message;
					}
				} else {
					console.error('error' + xhr.status);
				}
			}
		}
	
		xhr.open('POST', '/carrots-admin-ajax/a/login', true);
		xhr.send(myform);
	}	
}