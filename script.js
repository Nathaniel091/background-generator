let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementsByTagName("body")[0];

// when you select a value for the input, the 'setGradient' function will be called
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// lets write the setGradient function
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + ";";
}