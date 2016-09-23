$(function (){
	createChars();
	downChar();
    getName();
})

var chars = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var score = 0;
function createChars(){
	var div = document.getElementById("showText");
	window.setInterval(function(){
		var result = Math.random() * 26 + "";
		//console.log(result);
		result = result.split(".");
		//console.log(chars[result[0]]);
		var btn = document.createElement("input");
		btn.type = "button";
		btn.value = chars[result[0]];
		btn.className = "btn";
		btn.style.top = "0px";
		btn.style.left = (Math.random()*1100+"").split(".")[0]+"px";
		btn.style.background = "url(img/"+(Math.random()*26+"").split(".")[0] +".jpg)";
		btn.style.backgroundSize = "50px 50px";
		
		div.appendChild(btn);
		
	},1000)
}

function downChar() {
	var div = document.getElementById("showText");
	window.setInterval(function() {
		var btns = div.childNodes;
		for(var i = 0; i<btns.length; i++) {
			var btn = btns[i];
			if(1 == btn.nodeType){
				var top = parseInt(btn.style.top);
				if(top<500){
					btn.style.top = top + 1 + "px";
				}else{
					div.removeChild(btn);
					score -= 10;
					document.getElementById("score").innerHTML = score;
				}
			}
		}
	},10);
}

window.onkeyup = function(){
	var div = document.getElementById("showText");
	var eve = window.event||event;
	var code = eve.keyCode;
	var btns = div.childNodes;
	for(var i = 0;i<btns.length;i++){
		var btn = btns[i];
		if(1 == btn.nodeType){
			if(btn.value == chars[code-65]){
				div.removeChild(btn);
				score+=10;
				document.getElementById("score").innerHTML = score;
				break;
			}
		}
	}
}

function goBack() {
	window.location.href = "welcome.html";
}

function getName() {
	var newName = window.location.search;
    document.getElementById("name").innerHTML = newName.split("=")[1];

}

	
	

