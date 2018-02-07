console.log("loaded");
var canvasElement = document.getElementById("slate");
var canvasContext = canvasElement.getContext("2d");
var shape = "square";
var lastPoint = [-1,-1];


var animate = function(){
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
		
		
		
		window.requestAnimationFrame(drawCircle);
	}
	drawCircle();
}



document.getElementById("circleButton").addEventListener("click",animate);

//drawCircle();
