// Get user name
var userName = prompt("Please enter your name:");
var name = document.getElementById("name");
name.innerHTML = "Welcome " + userName;

// Generate math problem
var num1, num2, operator, answerInput;
var problem = document.getElementById("problem");
var answer = document.getElementById("answer");
var score = document.getElementById("score");
var point = 0;
generateProblem();

// Timer
var timeLeft = 100;
var time = document.getElementById("time");
var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    alert("Time's up! Your final score is " + point);
    location.reload();
  } else {
    time.innerHTML = "Time left: " + timeLeft;
    timeLeft--;
  }
}

function generateProblem() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  operator = Math.floor(Math.random() * 3);
  if (operator == 0) {
    operator = "+";
    answerInput = eval(num1 + operator + num2);
  } else if (operator == 1) {
    operator = "-";
    answerInput = eval(num1 + operator + num2);
  } else {
    operator = "*";
    answerInput = eval(num1 + operator + num2);
  }
  problem.innerHTML = num1 + " " + operator + " " + num2 + " = ";
}

// Check the answer
function checkAnswer() {
  if (answer.value == answerInput) {
    innerHTML = "Correct!";
    point++;
    score.innerHTML = "Score: " + point;
    answer.value = "";
    generateProblem();
  } else {
    innerHTML = "Incorrect!";
    point--;
    score.innerHTML = "Score: " + point;
    answer.value = "";
  }
}
