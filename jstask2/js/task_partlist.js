//读取数据
var partarr=JSON.parse(sessionStorage.getItem('partarr'));	



var partul=document.getElementsByClassName('partlist')[0];
//构造列表
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


//构造对象
var partObj=[];
for(var i=0;i<partarr.length;i++){
	partObj[i]={
		live:true
	}
	if(partarr[i]=='平民'){
		partObj[i].name='平民';
	}else{
		partObj[i].name='杀手';
	}
}

//存储数组
var send=JSON.stringify(partObj);	//转换为字符串
sessionStorage.setItem('partObj',send);	//存入数据

function startGame(){
	window.location.href='judge.html'
}





