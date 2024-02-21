let currentQuestionIndex = 0;
let score = 0;

const quizData = [
{
    question: "Koji je glavni grad Francuske?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Pariz", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
{
    question: "Koliko ima dana u nedelji?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
{
    question: 'Ko je autor "Romea i Julije"?',
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Fyodor Dostoevsky", correct: false },
    ],
  },
]

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const header = document.getElementById("kviz");
function startQuiz() {
  showQuestion(quizData[currentQuestionIndex]);
}
function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtons.innerText = "";
  question.answers.forEach((answer) => {
    const buttons = document.createElement("button");
    buttons.innerText = answer.text;
    buttons.addEventListener("click", () => {
      console.log(answer.correct);
      selectAnswer(answer);
      nextQuestion();
    });
    answerButtons.appendChild(buttons);
  });
}

function selectAnswer(answer){
  if (answer.correct){
   score++; 
  }
}
function nextQuestion(){
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length){
    showQuestion(quizData[currentQuestionIndex]);
  } else {
    result();
  }
}
function result(){
  if ((quizData.length / 2) < score){
    header.innerText = "Bravo";
  } else {
    header.innerText = ":("
  }
  answerButtons.innerText = "";
  questionContainer.innerText = "Broj tacni odgovora je:" + score;
}

startQuiz();