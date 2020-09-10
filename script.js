let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementsByTagName("body")[0];


// This function is reponsible for displaying the value of color1 and color2 (i.e linear-gradient [css code]) in text-format inside the 'h3' element
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + ";";
}

// this allow the h3 element to have a preset value when the page is loaded instead of displaying none
document.addEventListener('DOMContentLoaded', ()=>{
	setGradient()
})

// when you select a value for the input, the 'setGradient' function will be called
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);