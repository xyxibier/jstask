function start(){
	var qdcontent=document.getElementById('qdcontent');
	var clientwidth=document.body.clientWidth||document.documentElement.clientWidth;
	var clientheight=document.body.clientHeight||document.documentElement.clientHeight;
	qdcontent.style.left=(clientwidth-qdcontent.offsetWidth)/2+'px';
	qdcontent.style.top=(clientheight-qdcontent.offsetHeight)/2+'px';
}

window.onload=function(){
	start();
}

window.onresize=function(){
	start();
}
