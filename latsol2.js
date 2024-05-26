const questions = [
    {
        question: 'Jika a + b = 12 dan 2a - b = 5, berapakah nilai dari a??',
        answers: [
            { text: "A. 4", correct: false},
            { text: "B. 5", correct: false},
            { text: "C. 6", correct: true},
            { text: "D. 7", correct: false},
            { text: "E. 8", correct: false},
        ]
    },

    {
        question: 'Jika 3x + 2y = 14 dan 2x - y = 5, berapakah nilai dari y?',
        answers: [
            { text: "A. 1", correct: true},
            { text: "B. 2", correct: false},
            { text: "C. 3", correct: false},
            { text: "D. 4", correct: false},
            { text: "E. 5", correct: false},
        ]
    },

    {
        question: "Jika sebuah segitiga memiliki sudut-sudutnya berukuran 30°, 60°, dan 90°, berapakah besar sudut siku-siku tersebut?",
        answers: [
            { text: "A. 30°", correct: false},
            { text: "B. 45°", correct: false},
            { text: "C. 60°", correct: false},
            { text: "D. 75°", correct: false},
            { text: "E. 90°", correct: true},
        ]
    },

    {
        question: "Jika 2^x = 32, berapakah nilai dari x?",
        answers: [
            { text: "A. 3", correct: false},
            { text: "B. 4", correct: false},
            { text: "C. 5", correct: true},
            { text: "D. 15", correct: false},
            { text: "E. 20", correct: false},
        ]
    },

    {
        question: 'Jika 4p + 3q = 25 dan p - q = 3, berapakah nilai dari p?',
        answers: [
            { text: "A. 0", correct: false},
            { text: "B. 1", correct: false},
            { text: "C. 2", correct: false},
            { text: "D. 3", correct: true},
            { text: "E. 4", correct: false},
        ]
    },

    {
        question: "Jika n adalah bilangan ganjil, berapakah hasil dari n^2 - 1?",
        answers: [
            { text: "A. n - 1", correct: false},
            { text: "B. n + 1", correct: false},
            { text: "C. n^2", correct: false},
            { text: "D. n^2 - 2 ", correct: false},
            { text: "E. n^2 + 1", correct: true},
        ]
    },

    {
        question: "Jika a/3 = 2b/5, berapakah nilai dari a/b?",
        answers: [
            { text: "A. 2/3", correct: false},
            { text: "B. 3/2", correct: false},
            { text: "C. 5/3", correct: false},
            { text: "D. 3/5", correct: true},
            { text: "E. 2/5", correct: false},
        ]
    },

    {
        question: "Jika x^2 + 5x + 6 = 0, berapakah nilai dari x?",
        answers: [
            { text: "A. -2", correct: true},
            { text: "B. -1", correct: false},
            { text: "C. 1", correct: false},
            { text: "D. 2", correct: false},
            { text: "E. 3", correct: false},
        ]
    },

    {
        question: "Jika m + 3n = 14 dan 2m - n = 5, berapakah nilai dari m + n?",
        answers: [
            { text: "A. 3", correct: false},
            { text: "B. 4", correct: false},
            { text: "C. 5", correct: true},
            { text: "D. 6", correct: false},
            { text: "E. 7", correct: false},
        ]
    },

    {
        question: "Jika p adalah bilangan prima, berapakah hasil dari p^2 - p?",
        answers: [
            { text: "A. p - 1", correct: false},
            { text: "B. p", correct: true},
            { text: "C. p + 1", correct: false},
            { text: "D. p^2", correct: false},
            { text: "E. p^2 + 1", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
