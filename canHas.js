console.log("loaded");
var canvasElement = document.getElementById("slate");
var canvasContext = canvasElement.getContext("2d");
var shape = "square";
var lastPoint = [-1,-1];
var animationFrame = -1;
var whichAnimation = "circle";


var animateCircle = function(){
	var circleObject = {theX:250,theY:250,size:0,growDelta:1};
	var drawCircle = function(){

		canvasContext.clearRect(0,0,500,500);

		canvasContext.beginPath();
		canvasContext.arc(circleObject.theX,circleObject.theY,circleObject.size,0,2*Math.PI);
		canvasContext.stroke();
	
		circleObject.size+= circleObject.growDelta;
		
		if (circleObject.size > 250){
			circleObject.growDelta=-1;
		}
		if (circleObject.size <= 0){
			circleObject.growDelta=1;
		}
		
		
		
		animationFrame = window.requestAnimationFrame(drawCircle);
	}
	drawCircle();
}

var animateDVD = function(){
	var DVDobj = {x:0,y:0,xVel:5,yVel:5,width:150,height:100};
	var drawDVD = function(){
		canvasContext.clearRect(0,0,500,500);
		canvasContext.fillRect(DVDobj.x,DVDobj.y,DVDobj.width,DVDobj.height);
		DVDobj.x += DVDobj.xVel;
		DVDobj.y += DVDobj.yVel;
		if (DVDobj.x < 0 || (DVDobj.x + DVDobj.width) > 500){
			DVDobj.xVel *= -1;
		}
		if (DVDobj.y < 0 || (DVDobj.y + DVDobj.height) > 500){
			DVDobj.yVel *= -1;
		}
		animationFrame = window.requestAnimationFrame(drawDVD);
	}
	drawDVD();
	
	
}


var clearCanvas = function(){
	window.cancelAnimationFrame(animationFrame);
	canvasContext.clearRect(0,0,500,500);
}


var switchAnim = function(){
	if (whichAnimation == "circle"){
		whichAnimation = "dvd";
	}
	else {
		whichAnimation="circle";
	}
}

var runAnim = function(){
	if (whichAnimation == "circle"){
		animateCircle();
	}
	else {
		animateDVD();
	}
}




document.getElementById("switchAnimation").addEventListener("click",switchAnim);
document.getElementById("runAnimation").addEventListener("click",runAnim);

//drawCircle();
