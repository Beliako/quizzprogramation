// Questions data
const questions = [
  {
    question: "Combien d'étoiles de police peut-on obtenir sur GTA 5 ?",
    choices: ["3", "4", "5","10"],
    correctAnswer: 2
  },
  {
    question: "Quel studio a racheté Minecraft ?",
    choices: ["Sega","Epic Games","Mojang","Nintendo"],
    correctAnswer: 2
  },
  {
	 	question: "Quel personnage de Dark Souls adore le soleil ?",
	 	choices: ["Artorias","Solaire","Gwin","Le prince sans nom"],
	 	correctAnswer : 1
	},
	{
	 	question: "Comment s'appelle cette console ?",
		choices: ["La Super Nes","La Game cube","La P.S. 2","La nintendo 64"],
		correctAnswer : 3
	},
	{
	 	question: "Quel est le nom du royaume principal du roi dans la Série The Legend of Zelda ?",
		choices: ["Celesbourg","Firone","Désert Gerudo","Hyrule"],
		correctAnswer : 3
	},
	{
	 	question: "Quel est le nom du maître de Geralt dans la série the Witcher ?",
		choices: ["Jaskier","Vesemir","Yennefer","Eskel"], 
		correctAnswer : 1
	},
	{
	 	question: "Avec quel logiciel les joueurs programment sur Roblox ?",
		choices: ["Roblox Studio","Roblox Laucher Program","Roblox Devlopers","Roblox Player Laucher"],
		correctAnswer : 0
	},
	{
	  question: "Comment s'appelle le renard ami de Sonic ?",
		choices: ["Krystal","Foxy","Tails","Runard"],
		correctAnswer : 1
	}
		];

// Quiz variables
let currentQuestion = 0;
let score = 0;

// DOM elements
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");

// Load question and choices
function loadQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  choicesElement.innerHTML = "";
  for (let i = 0; i < question.choices.length; i++) {
    const choice = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "choice";
    radio.value = i;

    choice.appendChild(radio);
    choice.appendChild(document.createTextNode(question.choices[i]));

    choicesElement.appendChild(choice);
  }
}

// Check answer and go to the next question
function checkAnswer() {
  const selectedChoice = document.querySelector(
    'input[name="choice"]:checked'
  );

  if (selectedChoice) {
    const answer = parseInt(selectedChoice.value);

    if (answer === questions[currentQuestion].correctAnswer) {
      score++;
 }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
}

// Show the quiz result
function showResult() {
  const totalQuestions = questions.length;

  questionElement.textContent = "Le questionnaire est terminé!";
  choicesElement.style.display = "none";
  submitButton.style.display = "none";

  const resultElement = document.createElement("p");
  resultElement.textContent = `Ton score est de ${score} sur ${totalQuestions}.`;
  questionElement.parentNode.insertBefore(resultElement, choicesElement);

  document.querySelector("footer").style.position = "absolute";
}

// Event listener
submitButton.addEventListener("click", checkAnswer);

// Initialize quiz
loadQuestion();
