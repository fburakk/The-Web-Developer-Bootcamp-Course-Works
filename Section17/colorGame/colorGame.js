var numSquares = 6;
var colors = generateRandomColors(numSquares);
// [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)"
// ];


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    // add initial colors
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "#232323";
  messageDisplay.textContent = "";
});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    // add initial colors
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "#232323";
  messageDisplay.textContent = "";

});

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    // add initial colors
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
  messageDisplay.textContent = "";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // add initial colors
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function() {

    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      // alert("Correct");
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
      resetButton.textContent = "Play Again";
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length );
  return colors[random];
}

function generateRandomColors(num) {
  var colors = [];
  for (var i = 0; i < num; i++) {
    colors[i] = randomColor();
  }
  return colors;
}

function randomColor() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
















//
