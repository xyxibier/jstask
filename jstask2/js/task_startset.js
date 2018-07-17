var myinput=document.getElementById('number').getElementsByTagName('input');
var playernum=document.getElementById('playernum');
var max=parseInt(myinput[1].getAttribute('max'));
var min=parseInt(myinput[1].getAttribute('min'));
var ul=document.getElementById('playerlist');
var setclick=false;
var partarr;

//滑块滑过颜色的变化
function sliceColor(){
	myinput[1].style.backgroundSize=(myinput[1].value-min)/(max-min)*100+'% 100%';
}
sliceColor();

//+
function addValue(){	
	var x=myinput[1].value;
	if(x<max){
		myinput[1].value++;
		playernum.value++;
	}else{	
		alert('人太多了！');
	}
	sliceColor();
}

//-
function subValue(){
	var x=myinput[1].value;
	if(x>min){
		myinput[1].value--;
		playernum.value--;
	}else{	
		alert('人太少了,再找几个小伙伴来吧！');
	}
	sliceColor();
}

//改变输入框的值
function myChange(){	
	var x=playernum.value;
	if(!isNaN(x)&&x<=max&&x>=min){
		myinput[1].value=playernum.value;
	}else if(x>max){
		alert('最多'+max+'人！');
		playernum.value=myinput[1].value='18';
	}else if(x<min){
		alert('最少'+min+'人！');
		playernum.value=myinput[1].value='6';
	}
	sliceColor();
}

playernum.onchange=function(){			
	myChange();
}

myinput[1].onchange=function(){
	playernum.value=myinput[1].value;
}

myinput[0].onclick=function(){	
	subValue();
}

myinput[2].onclick=function(){	
	addValue();
}

//玩家配比
var numset=document.getElementById('numset');

function createLi(imgname,juese){	
	var li=document.createElement('li');
	ul.appendChild(li);
	
	var img=document.createElement('img');
	img.setAttribute('src','images/'+imgname+'.png')
	li.appendChild(img);
	
	var span=document.createElement('span');
	span.innerHTML=juese;
	li.appendChild(span);	
}

function playnum(){
	var totalnum=myinput[1].value;
	var killer;
	
	if(totalnum<15){
		killer=parseInt(totalnum/3);
	}else{
		killer=parseInt((totalnum-1)/3);
	}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	
	var common=totalnum-killer;
	sessionStorage.setItem('killernum',killer);
	sessionStorage.setItem('peoplenum',common);
	
	partarr=[];	
	for(var i=0;i<killer;i++){
		createLi('shashou','杀手');
		partarr.push('杀手');
	}
	for(var i=0;i<common;i++){
		createLi('pingmin','平民');
		partarr.push('平民');
	}
	
	return partarr;
}

numset.onclick=function(){
	setclick=true;
	ul.innerHTML=''
	playnum();
}


function sendmessage(){	
	//存储数组
	var send=JSON.stringify(partarr);	//转换为字符串
	sessionStorage.setItem('partarr',send);	//存入数据
	
	//存储词组
	var killerword=document.getElementById('killerword');
	var peopleword=document.getElementById('peopleword');
	sessionStorage.setItem('killerword',killerword.value);
	sessionStorage.setItem('peopleword',peopleword.value);	
}

function mytime(){
	//获取游戏开始时间
	var mydate=new Date();
	var starttime=mydate.getTime();
	sessionStorage.setItem('starttime',starttime);
}

//点击发牌按钮
function seecard(){
	var myli=document.getElementById('playerlist').getElementsByTagName('li');
	if(killerword.value==''){
		alert('请设置杀手词组');
	}else if(peopleword.value==''){
		alert('请设置平民词组');
	}else if(playernum.value==6&&playernum.value==myli.length){
		playnum();
		sendmessage();
		mytime();
		window.location.href="seecard.html";
	}else if(setclick&&playernum.value>6&&playernum.value<=18&&playernum.value==myli.length){
		sendmessage();
		mytime();
		window.location.href="seecard.html";
	}else{
		alert('请设置玩家配比');
	}
}
