document.oncontextmenu = function () {alert("右クリック禁止!"); return false;}

function red_title_color() {
	document.getElementById("title").style.color = "red";
}

function blink_title() {
	document.getElementById("title").style.color = "white";
	setTimeout("red_title_color()", 2950);
}

setInterval("blink_title()", 3000);