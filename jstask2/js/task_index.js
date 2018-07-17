
//游戏选择
var leftbtn = document.getElementById('leftbtn');
var rightbtn = document.getElementById('rightbtn');
var myli = document.getElementById('lunbo').getElementsByTagName('li');
var item = document.getElementById('mycontent').getElementsByClassName('item');
var gamebox = document.getElementsByClassName('gamebox')[0];
var gametitle=document.getElementById('gametitle');
var click = 0;

function itemTop() {
	item[item.length-1].style.display='block';
	var wolfbox=document.getElementById('wolfbox');
	wolfbox.style.top = (item[item.length-1].offsetHeight - wolfbox.offsetHeight) / 2 + 'px';
	wolfbox.style.left = (item[item.length-1].offsetWidth - wolfbox.offsetWidth) / 2 + 'px';
}

rightbtn.onclick = function() {
	click++;
	leftbtn.style.display = 'block';
	item[click - 1].style.display = 'none';
	item[click].style.display = 'block';
	myli[click - 1].className = '';
	myli[click].className = 'current';
	gametitle.innerHTML=item[click].getElementsByClassName('game')[0].innerHTML;
	if(click == item.length - 1) {			
		itemTop();
		rightbtn.style.display = 'none';
	}
}

leftbtn.onclick = function() {	
	rightbtn.style.display = 'block';
	item[click].style.display = 'none';
	item[click - 1].style.display = 'block';
	myli[click].className = '';
	myli[click - 1].className = 'current';
	gametitle.innerHTML=item[click-1].getElementsByClassName('game')[0].innerHTML;
	click--;
	if(click == 0) {
		leftbtn.style.display = 'none';
	}
}

//菜单栏展开缩起
var itembar = document.getElementById('itembar');
var gamecontent = document.getElementById('gamecontent');
var itembaricon = document.getElementById('itembaricon');
var mask=document.getElementById('mask');

itembaricon.onclick = function() {
	if(itembar.style.display == 'none') {
		itembar.style.display = 'block';
		mask.style.display = 'block';
		gamecontent.style.left = itembar.offsetWidth + 'px';
	}
}
mask.onclick = function() {
	itembar.style.display = 'none';
	mask.style.display = 'none';
	gamecontent.style.left = 0;
}

function gonggao(){
	window.location.href="notice.html";
}

function setting(){
	window.location.href="setting.html";
}

function help(){
	window.location.href="help.html";
}

function aboutus(){
	window.location.href="aboutus.html";
}

function startset(){
	window.location.href="startset.html";
}