var scoreFirst = document.querySelector("#scoreFirst");
var scoreSecond = document.querySelector("#scoreSecond");

var btnP1 = document.querySelector("#btnP1");
var btnP2 = document.querySelector("#btnP2");
var btnR = document.querySelector("#btnR");

var inpNum = document.querySelector("#inpNum");
var goal = document.querySelector("#goal");

var isFinished = false;

btnP1.addEventListener('click', function() {
  let score = parseInt(scoreFirst.innerText);
  let threshold = parseInt(goal.innerText);
  if (!isFinished) {
    scoreFirst.innerText = String(score + 1);
  }
  if (score + 1 === threshold) {
    isFinished = true;
    scoreFirst.style.backgroundColor = "green"
    btnP1.disabled = true;
    btnP2.disabled = true;
  }

});

btnP2.addEventListener('click', function() {
  let score = parseInt(scoreSecond.innerText);
  let threshold = parseInt(goal.innerText);
  if (!isFinished) {
    scoreSecond.innerText = String(score + 1);
  }
  if (score + 1 === threshold){
    isFinished = true;
    scoreSecond.style.backgroundColor = "green"
    btnP1.disabled = true;
    btnP2.disabled = true;
  }
});

btnR.addEventListener('click', function() {
  btnP1.disabled = false;
  btnP2.disabled = false;
  scoreFirst.innerText = "0";
  scoreSecond.innerText = "0";
  scoreFirst.style.backgroundColor = "";
  scoreSecond.style.backgroundColor = "";
  isFinished = false;
});

inpNum.addEventListener('click', function() {
  goal.innerText = inpNum.value;
  scoreFirst.innerText = "0";
  scoreSecond.innerText = "0";
});
