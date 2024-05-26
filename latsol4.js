const questions = [
    {
        question: 'Read the following passage and answer the question: "The Eiffel Tower is located in the heart of Paris, France. It was built in 1889 and is a symbol of the city. What is the Eiffel Tower a symbol of?"',
        answers: [
            { text: "A. London", correct: false},
            { text: "B. Paris", correct: true},
            { text: "C. Rome", correct: false},
            { text: "D. Berlin", correct: false},
            { text: "E. Madrid", correct: false},
        ]
    },

    {
        question: 'Choose the correct form of the verb to complete the sentence: "She _____ to the store when it started raining."',
        answers: [
            { text: "A. go", correct: false},
            { text: "B. goes", correct: false},
            { text: "C. going", correct: false},
            { text: "D. have gone", correct: false},
            { text: "E. went", correct: true},
        ]
    },

    {
        question: "Identify the correct synonym for the word 'efficient.'",
        answers: [
            { text: "A. Effective", correct: true},
            { text: "B. Lazy", correct: false},
            { text: "C. Inefficient", correct: false},
            { text: "D. Productive", correct: false},
            { text: "E. Careless", correct: false},
        ]
    },

    {
        question: "Choose the correct preposition to complete the sentence: 'The cat is sitting _____ the table.'",
        answers: [
            { text: "A. at", correct: false},
            { text: "B. on", correct: false},
            { text: "C. in", correct: true},
            { text: "D. under", correct: false},
            { text: "E. between", correct: false},
        ]
    },

    {
        question: 'Read the sentence and identify the type of conjunction used: "I wanted to go to the party, but I had too much homework."',
        answers: [
            { text: "A. Coordinating conjunction", correct: true},
            { text: "B. Subordinating conjunction ", correct: false},
            { text: "C. Correlative conjunction  ", correct: false},
            { text: "D. Adverbial conjunction  ", correct: false},
            { text: "E. Interjection", correct: false},
        ]
    },

    {
        question: "Choose the correct modal verb to complete the sentence: 'You _____ finish your homework before going out.'",
        answers: [
            { text: "A. can", correct: false},
            { text: "B. must ", correct: true},
            { text: "C. should  ", correct: false},
            { text: "D. might", correct: false},
            { text: "E. would", correct: false},
        ]
    },

    {
        question: "Identify the correct passive form of the sentence: 'They are repairing the bridge.'",
        answers: [
            { text: "A. The bridge is being repaired by them.", correct: true},
            { text: "B. The bridge repairs them.", correct: false},
            { text: "C. The bridge is repaired by them.", correct: false},
            { text: "D. The bridge has been repaired by them.", correct: false},
            { text: "E. The bridge was repaired by them.", correct: false},
        ]
    },

    {
        question: "Choose the correct relative pronoun to complete the sentence: 'The person _____ helped me was very kind.'",
        answers: [
            { text: "A. which", correct: false},
            { text: "B. whom", correct: false},
            { text: "C. whose ", correct: false},
            { text: "D. who", correct: true},
            { text: "E. whomsoever", correct: false},
        ]
    },

    {
        question: "Identify the correct form of the comparative adjective: 'The elephant is _____ than the giraffe.'",
        answers: [
            { text: "A. tall", correct: false},
            { text: "B. taller", correct: true},
            { text: "C. more tall", correct: false},
            { text: "D. tallest", correct: false},
            { text: "E. small", correct: false},
        ]
    },

    {
        question: "Read the sentence and identify the type of sentence: 'Why are you so late?'",
        answers: [
            { text: "A. Declarative", correct: false},
            { text: "B. Interrogative", correct: true},
            { text: "C. Imperative", correct: false},
            { text: "D. Exclamatory", correct: false},
            { text: "E. Conditional", correct: false},
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
