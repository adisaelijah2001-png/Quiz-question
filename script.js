

const startscreen = document.getElementById('start-screen');
const startbutton = document.getElementById('start-btn');
const quizscreen = document.getElementById('quiz-screen');
const questiontext = document.getElementById('question-text');
const currentquestion = document.getElementById('current-question');
const scorespan = document.getElementById('score');
const answercontainer = document.getElementById('answer-container');
const progress = document.getElementById('progress');
const resultscreen = document.getElementById('result-screen');
const finalscore = document.getElementById('final-score');
const maxscore = document.getElementById('max-score');
const restartbtn = document.getElementById('restart-btn');
const resultmessage = document.getElementById('result-message');
const totalquestions = document.getElementById('total-questions');

const quizquestions = [
    {
        question: 'What is the capital of france?',
        answer: [
            {text: 'London', correct: false},
            {text: 'Berlin', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Madrid', correct: false},
        ],
    },
    {
        question: 'What is the largest ocean on earth?',
        answer: [
            {text: 'Atlantic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'Arctic Ocean', correct: false},
            {text: 'Pacific Ocean', correct: true},
        ],
    },
    {
        question: 'What is the capital of france?',
        answer: [
            {text: 'London', correct: false},
            {text: 'Berlin', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Madrid', correct: false},
        ],
    },
    {
       question: 'What is the capital of france?',
        answer: [
            {text: 'London', correct: false},
            {text: 'Berlin', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Madrid', correct: false},
        ], 
    },
    {
        question: 'What is the capital of france?',
        answer: [
            {text: 'London', correct: false},
            {text: 'Berlin', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Madrid', correct: false},
        ],
    },
]

let currentquestionindex = 0;
let score =0;
let answersDisabled = false

totalquestions.textContent = quizquestions.length;
maxscore.textContent = quizquestions.length;

startbutton.addEventListener('click', startQuiz)
restartbtn.addEventListener('click', restartQuiz)

function startQuiz(){
currentquestionindex = 0;
scorespan.textContent = 0;

startscreen.classList.remove('active');
quizscreen.classList.add('active')

showQuestions()
}

function showQuestions{
    answersDisabled = false;
    const currentquestion = quizquestions[currentquestionindex]

    currentquestion.textContent = currentquestionindex + 1

    const progressPercent = {currentquestionindex / quizquestions.length} + 100;
    progressBar.style.width = progressPercent + "%"

    quizText.textContent = currentquestion.question

    answercontainer.innerHTML = "";
    
    currentquestion.answer.forEach(answer => {
    const button = document.createElement('button')
    button.textContent = answer.textbutton.classList.add('answer-btn');
    
    button.addEventListener('click', selectAnswer);

    answercontainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if {answersDisabled} return

    answersDisabled = true

    const selectedButton = event.target;
    const iscorrect = selectedButton.dataset.correct == "true";


    Array.from(answercontainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        else{
            button.classList.add('incorrect');
        }
    });

    if(iscorrect) {
        score++;
        scorespan.textContent = score
    }

    setTimeout(() => {
        currentquestionindex++;

        if(currentquestionindex < quizquestions.length) {
              
        }
    })
}

function restartQuiz(){
    console.log('quiz re-started')
}