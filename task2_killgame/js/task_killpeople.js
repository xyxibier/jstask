//构造列表
var partarr=JSON.parse(sessionStorage.getItem('partarr'));	
var partul=document.getElementsByClassName('partlist')[0];
function partList(i){
	var list=document.createElement('li');
	partul.appendChild(list);
	
	var part=document.createElement('span');
	part.className='thispart';
	part.innerHTML=partarr[i];
	list.appendChild(part);
	
	var num=document.createElement('span');
	num.className='thisnum';
	num.innerHTML=(i+1)+'号';
	list.appendChild(num);
}
for(var i=0;i<partarr.length;i++){
	partList(i);
}


var partObj=JSON.parse(sessionStorage.getItem('partObj'));
var killpage=JSON.parse(sessionStorage.getItem('killpage'));
var votepage=JSON.parse(sessionStorage.getItem('votepage'));
var killindex=sessionStorage.getItem('killindex');
var voteindex=sessionStorage.getItem('voteindex');


//点击杀人事件
var kill=false;
$('.partlist').delegate('li','click',function(e){	
	kill=true;
	var index=$(this).index();	
	$(this).css('border','solid 2px red');				
	$(this).siblings().css('border','solid 2px #fff');
	if(killpage){
		if(partObj[index].name=='杀手'){
			kill=false;
		}else{			
			kill=true;
			sessionStorage.setItem('killindex',index);
		}	
	}
	if(killpage&&partObj[index].name=='平民'){
		if(partObj[index].name=='杀手'){
			kill=false;
		}else{			
			kill=true;
			sessionStorage.setItem('killindex',index);
		}	
	}else if(votepage&&partObj[index].live==true){
		kill=true;
		sessionStorage.setItem('killindex',index);
	}		
	//弹出事件
	if(partObj[index].live==false){
		alert('玩家已死');
		$(this).css('border','solid 2px #fff');		
		kill=false;
	}else if(killpage&&partObj[index].name=='杀手'){
		alert('请杀平民');
		$(this).css('border','solid 2px #fff');	
		kill=false;
	}
})

//死亡玩家状态
var whoarr=JSON.parse(sessionStorage.getItem('whoarr'));
if(whoarr){	
	for(var i=0;i<whoarr.length;i++){	
		$('.partlist li').eq(parseInt(whoarr[i].num)-1).css('background','#c8c8c8');
	};	
}

//杀人
if(killpage){
	$('#vote').val('确定');
}

//投票
if(votepage){
	$('#vote').val('投票');	
	var theday=sessionStorage.getItem('theday');
	theday++;
	sessionStorage.setItem('thedays',theday);
}

//点击按钮
$('#vote').click(function(){		
	//储存被杀死的人
	var whoarr;
	if(JSON.parse(sessionStorage.getItem('whoarr'))){
		whoarr=JSON.parse(sessionStorage.getItem('whoarr'));
	}else{
		whoarr=[];
	}
	var killindex=sessionStorage.getItem('killindex');
	if(kill){
		partObj[killindex].live=false;
		var dead={num:(parseInt(killindex)+1),name:partObj[killindex].name};
		whoarr.push(dead);
	}
	sessionStorage.setItem('partObj',JSON.stringify(partObj));
	sessionStorage.setItem('whoarr',JSON.stringify(whoarr));
	
	//判断被杀死的人数
	var killer=0;
	var people=0;
	for(var i=0;i<partObj.length;i++){
		if(partObj[i].live==true){
			if(partObj[i].name=='杀手'){
				killer++;
			}else if(partObj[i].name=='平民'){
				people++;
			}	
		}	
	}
		
	//判断结果
	if(killer>=people){
		sessionStorage.setItem('win','杀手胜利');
		window.location.href='win.html';
	}else if(killer==0){
		sessionStorage.setItem('win','平民胜利');
		window.location.href='win.html';
	}else if(kill){
		window.location.href='judge.html';
	}else if(killpage){
		alert('杀手请杀人')
	}else if(votepage){
		alert('请投票')
	}
})

