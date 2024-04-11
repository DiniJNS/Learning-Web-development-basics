const scrambleWord = document.getElementById("scrambleWord")
const scrambled = document.getElementById("scrambled")
const input = document.getElementById("input")
const output = document.getElementById("output")
const guesses = document.getElementById("guesses")

const words = ["rainbow","tennis","mammal","mouse","wednesday","approximately","animal"];
let displayWord = ("");
let guessesLeft = 3;
let index = 0;
let score = 0;
let counter = 1;

function startGame(){
  resetGame();

 // Set up a timer
  timer = setInterval(()=>{
  const timerElement = document.getElementById("timer");
  const seconds = parseInt(timerElement.textContent, 0);
  counter++;
  if (seconds === 0){
  console.log("Time's up!");
  clearInterval(timer);
  }else{
    timerElement.textContent = seconds + 1;
  }
 }, 1000);
}

function resetGame(){
  document.getElementById("guesses").textContent = guessesLeft;
  document.getElementById("timer").textContent = 1;
  clearInterval(timer);
}

function shuffleArray(words) {
  // scrambleWord = Array.from(str)  
  for (let i = words.length - 1; i > 0; i--) { 
  let j = Math.floor(Math.random() * (i + 1)); 
  // Swap elemnts
  let temp = words[i]; 
  words[i] = words[j]; 
  words[j] = temp; 
  }
  return words[0]
} 
 
function randomizeLetters (words){
  while(true) {
    let randomLetters = shuffleArray(words).split("").sort(()=> Math.random() - 0.5).join("");
    if(!words.includes(randomLetters)){
      return randomLetters
    }
  }  
}
function stopFunction(){
  clearInterval(timer);
  console.log("stopFunction");
}

//Function to check input and display result 
function check() {
  const guesses = document.getElementById("input").value.toLowerCase();
  let word = document.getElementById("input").value;     
  let result;
    for(let item of words){
      if (item === word.trim().toLowerCase()) {
        score += 3;
        document.getElementById('score').innerText = score;
        document.getElementById("input").value = "";
        document.querySelector("button").addEventListener("click", ()=>{
          score++;
          document.getElementById("score").textContent = score;
          localStorage.setItem("score",score);
        });
        console.log(item, word)
        output.textContent = "Result: correct"; 
        return;
      }else{
      output.textContent = "Result: incorrect";
      guessesLeft--;
      return;
    }
  }
}
// Function call when page load for first time 
function refreshPage(){
  window.location.reload();
}
document.addEventListener('DOMContentLoaded', ()=>{
  scrambleWord.textContent = randomizeLetters(words)
})



