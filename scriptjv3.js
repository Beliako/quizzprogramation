// Questions data
const questions = [
  {
    question: "Quel est le personnage principal de la Série The Legend of Zelda ?",
    choices: ["Zelda", "Hagrid", "Link","Epona"],
    correctAnswer: 0
  },
  {
    question: "Comment s'appellent les personnages champignons de la Série Mario ?",
    choices: ["Les Toals", "Les Toads", "Les Meushrooms", "Les Champagnac"],
    correctAnswer: 1
  },
  {
	 	question: "Quel est le système de jeux de Fortnite ?",
	 	choices: ["Un RPG","Un Battle Royal","Un jeu de Survie","Un walking simulator"],
	 	correctAnswer : 1
	},
	{
	 	question: "Sonic est ?",
		choices: ["Un hérisson","Un renard", "Un lapin","Un singe"],
		correctAnswer : 0
	},
	{
	 	question: "Dans quel jeu le héros est-il Samus Aran ?",
		choices: ["Arcadia", "Galaxy Battle", "Metroid", "Grand Test Auto"],
		correctAnswer : 2
	},
	{
	 	question: "Laquelle de ces consoles est de Nintendo ?",
		choices: ["La Playstation","L'Occulus Rift","La Xbox","La Wii"], 
		correctAnswer : 3
	},
	{
	 	question: "Quel est le héros de Tomb Raider ?",
		choices: ["Lara Croft","Jony Sises","Nathan Drake","Peach"],
		correctAnswer : 0
	},
	{
	  question: "Quels sont les noms des deux personnages par défauts de Minecraft ?",
		choices: ["Steve et Alex","Evets et Xela","Axel et Steven","Dream et Fuze"],
		correctAnswer: 0
	},
	{
	 	question: "Quel est le but d'Animal Crossing ?",
		choices: ["Elever des animaux","Battre un boss","Créer son île","Faire des courses de Kart"],
		correctAnswer : 2
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
  resultElement.textContent = `Ton score est de  ${score} sur ${totalQuestions}.`;
  questionElement.parentNode.insertBefore(resultElement, choicesElement);

  document.querySelector("footer").style.position = "absolute";
}

// Event listener
submitButton.addEventListener("click", checkAnswer);

// Initialize quiz
loadQuestion();
