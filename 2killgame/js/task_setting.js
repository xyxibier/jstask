var voicebtn = document.getElementById('voicebtn').getElementsByTagName('input');
var voicebox = document.getElementById('voicebox');

voicebtn[1].onclick = function() {
	voicebtn[0].className = '';
	voicebtn[1].className = 'current';
	voicebox.style.display = 'block';
}

voicebtn[0].onclick = function() {
	voicebtn[0].className = 'current';
	voicebtn[1].className = '';
	voicebox.style.display = 'none';
}