// Questions data
const questions = [
  {
    question: "Lors du Tour de France Cycliste, qui est r�compens� d'un maillot blanc � pois rouge ?",
    choices: ["Le meilleur r�parateur de v�lo", "Le meilleur grimpeur", "Le coureur le plus combatif","Le plus jeune coureur"],
    correctAnswer: 1
  },
  {
    question: "O� se sont d�roul�s les jeux Olympiques d'�t� en 2016 ?",
    choices: ["Tunis","Tokyo","Paris","Rio de Janeiro"],
    correctAnswer: 3
  },
  {
	 	question: "Quel nom porte un terrain de tennis ?",
	 	choices: ["Un court","Un cours","Une course","Une courre"],
	 	correctAnswer : 0
	},
	{
	 	question: "Depuis quelle ann�e le badminton est devenu une discipline olympique ?",
		choices: ["1546","1976","1992","2009"],
		correctAnswer : 2
	},
	{
	 	question: "Le handball est d'origine ?",
		choices: ["allemande","fran�aise","alg�rienne","am�ricaine"],
		correctAnswer : 0
	},
	{
	 	question: "Combien y-a-t-il de joueur dans une �quipe de basket ?",
		choices: ["3","0","6","5"], 
		correctAnswer : 3
	},
	{
	 	question: "De quelle mati�re sont � l'origine les boules de billard ?",
		choices: ["bois","ivoire","b�ton","plastique"],
		correctAnswer : 1
	},
	{
	  question: "Combien de temps dure un match de football ?",
		choices: ["120 minutes","60 minutes","90 minutes","5 minutes"],
		correctAnswer : 2
	},
	{
	  question: "En quelle ann�e la France a gagn� sa premi�re coupe du monde ?",
		choices: ["1998","2018","2016","1988"],
		correctAnswer : 0
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

  questionElement.textContent = "Le questionnaire est termin�!";
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
