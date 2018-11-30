var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton")


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomHexNumber() {
	return ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
}

function randomColor() {
	color1.value = "#" + randomHexNumber();
	color2.value = "#" + randomHexNumber();
	console
	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);

setGradient();

