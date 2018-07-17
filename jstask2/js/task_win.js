//获取数据
var win=sessionStorage.getItem('win');
var killernum=sessionStorage.getItem('killernum');
var peoplenum=sessionStorage.getItem('peoplenum');
var killerword=sessionStorage.getItem('killerword');
var peopleword=sessionStorage.getItem('peopleword');
var whoarr=JSON.parse(sessionStorage.getItem('whoarr'));	
var theday=sessionStorage.getItem('theday');
var starttime=sessionStorage.getItem('starttime');

var mydate=new Date();
var endtime=mydate.getTime();
var thetime=(endtime-starttime)/1000; 
	h=parseInt(thetime/(60*60)%24);
	m=parseInt(thetime/60%60);
	s=parseInt(thetime%60);

//游戏详情
$('#winpeople').html(win);
$('#thetime').html(h+'小时'+m+'分钟'+s+'秒');
$('#allkiller').html(killernum);
$('#allpeople').html(peoplenum);
$('#killerword').html(killerword);
$('#peopleword').html(peopleword);


//杀人详情
for(var i=0;i<theday;i++){
	$('.daydetail ul').append('<li><h4></h4><p></p><p></p></li>');
	$('.daydetail ul h4').eq(i).html('第 '+(i+1)+' 天');
}

for(var i=0;i<whoarr.length;i=i+2){	
	$('.daydetail ul p').eq(i).html('晚上：'+whoarr[i].num+'号被杀死，他的身份是'+whoarr[i].name);
}
for(var i=1;i<whoarr.length;i=i+2){	
	$('.daydetail ul p').eq(i).html('白天：'+whoarr[i].num+'号被全民投票投死，他的身份是'+whoarr[i].name);
}
