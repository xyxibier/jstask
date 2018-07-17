
//销毁本地数据
function removeData(){	
	sessionStorage.clear();
}


//结束游戏按钮
function endGame(){
	if(confirm('确定结束游戏吗？')){
		if(!whoarr){		
			removeData();			
			window.location.href='index.html';	
		}else{			
			window.location.href='gamedetail.html';
		}
	}else{
		return;
	}	
}

function again(){
	removeData();
	window.location.href='startset.html';	
}

function toindex(){
	removeData();
	window.location.href='index.html';	
}
