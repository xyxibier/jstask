
//读取数据
var get=sessionStorage.getItem('partarr');	//读取数据
var partarr=JSON.parse(get);		//重新转换为数组
	
//读取词组
var killerword=sessionStorage.getItem('killerword');
var peopleword=sessionStorage.getItem('peopleword');

//数组随机排序
function random(arr){
	var i=arr.length,s,j;
	while(i){
		j=Math.floor(Math.random()*i--);		//数组长度范围内的随机数
		s=arr[i];	//获取数组的最后一个元素
		arr[i]=arr[j];	//把随机获取下标赋值给数组最后一个元素
		arr[j]=s;	//把数组的最后一个元素赋值给随机获取的下标
	}
	return arr;
}

partarr=random(partarr);

//存取打乱后的数组
var send=JSON.stringify(partarr);	//转换为字符串
sessionStorage.setItem('partarr',send);	//存入数据

//传递玩家身份
var fpbtn=document.getElementById('fpbtn')
var front=document.getElementById('front');
var back=document.getElementById('back');
var cardnumarr=document.getElementsByClassName('cardnum');
var part=back.getElementsByTagName('p');
var imgname=back.getElementsByTagName('img')[0];
var click=0;
var num=1;

function transnum(){
	click++;
	
	//点击次数为奇数次时
	if(click%2){		
		//3D翻牌
		front.className='frontclick';
		back.className='';			
			
		//内容更换	
		part[0].innerHTML='身份：'+partarr[num-1];
		if(partarr[num-1]=='杀手'){
			imgname.src='images/shashou.png';
			part[1].innerHTML='词组：'+killerword;
		}else{
			imgname.src='images/pingmin.png';
			part[1].innerHTML='词组：'+peopleword;
		}
			
		//按钮更换
		if(num>partarr.length-1){
			fpbtn.value='法官日志';
			fpbtn.onclick=function(){	
				window.location.href='partlist.html';
			}
		}else{				
			fpbtn.value='隐藏并传递给'+(++num)+'号';
		}
		
	}else{
		//3D翻牌
		front.className='';
		back.className='backclick';
					
		//玩家编号更换
		for(var i=0;i<cardnumarr.length;i++){
			cardnumarr[i].innerHTML=num;
		}	
			
		//按钮更换
		fpbtn.value='查看'+num+'号身份';
		
	}
}

fpbtn.onclick=function(){	
	transnum();	
}
