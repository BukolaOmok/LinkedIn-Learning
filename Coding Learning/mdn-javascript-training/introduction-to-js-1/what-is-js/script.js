
// Function for the first set of buttons
function createParagraphForFirstButton() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

// Select all <button> elements
const buttons = document.querySelectorAll(".buttons");

// Attach the first event listener
for (const button of buttons) {
  button.addEventListener("click", createParagraphForFirstButton); // Corrected the function name here
}

// Function for the second set of buttons (with class ".buttons1")
function createParagraphForSecondButton() {
  const heading = document.createElement("h1");
  heading.textContent = "You are amazing, Bukola!";
  document.body.appendChild(heading);
}

// Select all elements with class "buttons1"
const buttons1 = document.querySelectorAll(".buttons1");

// Attach the second event listener
for (const button of buttons1) {
  button.addEventListener("click", createParagraphForSecondButton); // Corrected the event name to lowercase "click"
}

function createParagraphForThirdButton() {
  const par = document.createElement("h2");
  par.textContent = "You are a rockstarrrr!!!";
  document.body.appendChild(par);
}

const buttons2 = document.querySelectorAll(".buttons2");
for (const button of buttons2) {
  button.addEventListener("click", createParagraphForThirdButton);
}