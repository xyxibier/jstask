function myfont(){
	var htmlWidth=document.documentElement.clientWidth||document.body.clientWidth;
	var htmlDom=document.getElementsByTagName('html')[0];
	htmlDom.style.fontSize=htmlWidth/20+'px';
}	

window.onload=function(){
	
	myfont();
	
	var mybtn=document.getElementsByTagName('input');
	var littlebox=document.getElementById('ninebox').getElementsByTagName('span');
	var count=9,num=3,click=0;
	var myset;
	
	function getRandom(){				
		var arr=[];		
		var arrout=[];
		//构建数组
		for(var i=0;i<count;i++){
			arr[i]=i;
		}
		
		for(var i=0;i<num;i++){			
			var temp=Math.round(Math.random()*(arr.length-1));
			arrout.push(arr[temp]);
			arr.splice(temp,1);
		}			
		
		return arrout;		
	}		
	
	function getcolor(){
		var tempcolor=[];
		for(var i=0;i<num;i++){			
			var r=Math.round(Math.random()*255);
			var g=Math.round(Math.random()*255);
			var b=Math.round(Math.random()*255);
			var temp='rgb('+r+','+g+','+b+')';
			tempcolor.push(temp);
		}
		return tempcolor;
	}
	
	function blingbling(){
		var m=getRandom(),n=getcolor();		
		for(var i=0;i<3;i++){
			var a=m[i],b=n[i];		
			littlebox[a].style.background=b;
		}	
		setTimeout(renew,500);
	}
	
	function renew(){
		for(var i=0;i<count;i++){	
			littlebox[i].style.background='#FFB000';
		}
	}	
	
	mybtn[0].onclick=function(){	
		if(click==0){			
			clearInterval(myset);
			myset=setInterval(blingbling,1000);	
			click++;
		}
		
	}
			
	mybtn[1].onclick=function(){
		clearInterval(myset);
		click=0;
	}
	
}

window.onresize=function(){
	myfont();
}
