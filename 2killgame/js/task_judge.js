//读取数据
var partObj=JSON.parse(sessionStorage.getItem('partObj'));	
var voteindex=sessionStorage.getItem('voteindex');
var killpage=sessionStorage.getItem('killpage');
var votepage=sessionStorage.getItem('votepage');

//天数判断
var theday;
theday=sessionStorage.getItem('thedays')||1;
sessionStorage.setItem('theday',theday);

//天数循环
for(var i=0;i<theday;i++){
	$('.judgebox').append('<div class="theday"><span class="daytitle"><h4></h4><i class="iconfont suoqi" style="display: block;">&#xe60a;</i><i class="iconfont zhankai" style="display: none;">&#xe600;</i></span><div class="daybox" style="display: block;"><ul><li><input class="mybtns killbtn" type="button" value="杀手杀人"/><p class="killfont"></p></li><li><input class="mybtns ghostsay" type="button" value="亡灵发表遗言"/></li><li><input class="mybtns playersay" type="button" value="玩家依次发言"/></li><li><input class="mybtns vote" type="button" value="投票" id="vote" /><p class="votefont"></p></li></ul><div style="clear: both;"></div></div></div>');
	$('.daytitle h4').eq(i).append('第 '+(i+1)+' 天');
	$('.daybox').hide();
	$('.daybox').eq(theday-1).show();	
}

//获取按钮点击次数
var click;
if(sessionStorage.getItem('click')){
	click=sessionStorage.getItem('click');
}else{
	click=0;
}
var clicks;
if(sessionStorage.getItem('clicks')){
	clicks=sessionStorage.getItem('clicks');
}else{
	clicks=0;
}

//杀人内容
var shunxu=1;
var whoarr=JSON.parse(sessionStorage.getItem('whoarr'));
for(var i=0;i<click;i++){	
	if(click){
		$('.killbtn').eq(i).attr('disabled','disabled').css('background','#c8c8c8')
		$('.killfont').eq(i).addClass('killdetail');
		$('.killdetail').eq(i).text(whoarr[2*i].num+'号被杀死，他的真实身份是'+whoarr[2*i].name);
	}
}
//投票内容
for(var i=0;i<clicks;i++){		
	if(clicks){
		$('.ghostsay').eq(i).attr('disabled','disabled').css('background','#c8c8c8');
		$('.playersay').eq(i).attr('disabled','disabled').css('background','#c8c8c8');
		$('.vote').eq(i).attr('disabled','disabled').css('background','#c8c8c8')
		$('.votefont').eq(i).addClass('votedetail');
		$('.votedetail').eq(i).text(whoarr[2*i+1].num+'号被杀死，他的真实身份是'+whoarr[2*i+1].name);
	}	
}
	
//显示隐藏
$('.daytitle').click(function(){
	var ind=$('.daytitle').index(this);
	$('.daybox').eq(ind).toggle();
	$('.zhankai').eq(ind).toggle();
	$('.suoqi').eq(ind).toggle();
})

//杀手杀人按钮
$('.killbtn').eq(theday-1).click(function(){	
	click++;
	sessionStorage.setItem('click',click);
	sessionStorage.setItem('killpage',1);
	sessionStorage.setItem('votepage',0);
	sessionStorage.setItem('shunxu',2);
	window.location.href='killpeople.html';		
})

//亡灵发言按钮
shunxu=sessionStorage.getItem('shunxu');
$('.ghostsay').eq(theday-1).click(function(){
	if(shunxu==2){
		if(confirm('请亡灵发言')){
			$('.ghostsay').attr('disabled','disabled').css('background','#c8c8c8');
			shunxu++;
		}
	}else if(shunxu!==2){
		alert('请按顺序点击按钮');
	}
})

//玩家发言按钮
$('.playersay').eq(theday-1).click(function(){
	if(shunxu==3){
		if(confirm('请玩家依次发言')){
			$('.playersay').attr('disabled','disabled').css('background','#c8c8c8');
			shunxu++;
		}
	}else if(shunxu!==3){
		alert('请按顺序点击按钮');
	}
})

//投票按钮
$('.vote').eq(theday-1).click(function(){
	if(shunxu==4){		
		clicks++;
		sessionStorage.setItem('clicks',clicks);
		sessionStorage.setItem('votepage',1);
		sessionStorage.setItem('killpage',0);
		window.location.href='killpeople.html';		
		sessionStorage.setItem('shunxu',0);
	}else if(shunxu!==4){
		alert('请按顺序点击按钮');
	}
})
