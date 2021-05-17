// CACHE DOM Elements in variables
var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var direction = document.getElementById("direction");
var body = document.querySelector("body");
var random = document.getElementById("random");

// Declare functions
function setGradient() {
    body.style.background = 
        "linear-gradient(to "
        + direction.value
        + ", "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background;
}

function randomHex() {
    var result = [];
    var chars = "0123456789ABCDEF"
    for (var i = 0; i < 6; i++) {
        result.push(chars.charAt(Math.floor(Math.random() * 16)))
    }
    return ("#" + result.join(''));
}

function randomise() {
    color1.value = randomHex();
    color2.value = randomHex();    

   setGradient();
}

// Event Listeners
window.addEventListener("load", setGradient)

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

direction.addEventListener("input", setGradient)

random.addEventListener("click", randomise)