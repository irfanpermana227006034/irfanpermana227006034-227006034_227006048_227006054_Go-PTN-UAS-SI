const questions = [
    {
        question: 'Pada awal Januari 2019, Roronoa Zoro menabung di bank sebesar Rp700.000 dengan bunga 12% per tahun. Berapa rupiah tabungan Roronoa Zoro pada akhir bulan Maret 2020?',
        answers: [
            { text: "A. Rp.800.000", correct: false},
            { text: "B. Rp.805.000", correct: true},
            { text: "C. Rp.815.000", correct: false},
            { text: "D. Rp.825.000", correct: false},
            { text: "E. Rp.835.000", correct: false},
        ]
    },

    {
        question: 'Perhatikan deret angka berikut ini "...,2, 6, X, Y, 162". Nilai X dan Y secara berturut-turut adalah...',
        answers: [
            { text: "A. 8 dan 24", correct: false},
            { text: "B. 9 dan 27", correct: false},
            { text: "C. 12 dan 38", correct: false},
            { text: "D. 18 dan 54", correct: true},
            { text: "E. 36 dan 81", correct: false},
        ]
    },

    {
        question: "Suatu tangki berisi penuh minyak mempunyai berat 80 kg. Jika tangki itu berisi minyak setengah, maka beratnya 46 kg. Berapa kg berat tangki tersebut jika kosong?",
        answers: [
            { text: "A. 6", correct: false},
            { text: "B. 12", correct: true},
            { text: "C. 23", correct: false},
            { text: "D. 24", correct: false},
            { text: "E. 34", correct: false},
        ]
    },

    {
        question: "Gojo sedang membeli kue di toko untuk diberikan pada adik. Gojo hanya bisa digunakan untuk membayar 15 kue yang mempunyai tiga pilihan rasa, yaitu rasa pisang, rasa green tea, dan rasa coklat. Jika Gojo membeli paling sedikit 4 kue untuk masing-masing rasa, banyak komposisi kue yang dibeli oleh Gojo adalah…",
        answers: [
            { text: "A. 8", correct: false},
            { text: "B. 10", correct: false},
            { text: "C. 12", correct: true},
            { text: "D. 15", correct: false},
            { text: "E. 20", correct: false},
        ]
    },

    {
        question: '"..., 5, 7, 9, 11, 13". Angka yang paling sesuai untuk melengkapi deret tersebut adalah ....',
        answers: [
            { text: "A. 0", correct: false},
            { text: "B. 1", correct: false},
            { text: "C. 2", correct: false},
            { text: "D. 3", correct: true},
            { text: "E. 4", correct: false},
        ]
    },

    {
        question: "Di sebuah kelas, ada 12 murid laki-laki dan 16 murid perempuan, dengan rerata nilai ulangan Matematika adalah 80. Setelah melihat hasil tersebut, guru Matematika memberikan kesempatan kepada 4 murid, dengan nilai masing-masing 52, 56, 62, dan 66, untuk remedial. Diketahui bahwa nilai rata-rata peserta remedial naik 7 poin. Akan dipilih pengurus inti kelas yang terdiri dari 5 murid. Peluang kelas memiliki 1 atau dua murid laki-laki sebagai anggota pengurus inti adalah...",
        answers: [
            { text: "A. 22/63", correct: false},
            { text: "B. 47/63", correct: true},
            { text: "C. 70/117", correct: false},
            { text: "D. 88/117", correct: false},
            { text: "E. Salah Semua", correct: false},
        ]
    },

    {
        question: "Pilihlah kelanjutan pola berikut: A, C, E, G, ...",
        answers: [
            { text: "A. H", correct: false},
            { text: "B. I", correct: true},
            { text: "C. J", correct: false},
            { text: "D. K", correct: false},
            { text: "E. L", correct: false},
        ]
    },

    {
        question: "Jika SEGITIGA adalah 123456789 dan KERUCUT adalah 35784201, maka berapakah nilai dari KERJA?",
        answers: [
            { text: "A. 35798", correct: false},
            { text: "B. 35719", correct: false},
            { text: "C. 35789", correct: true},
            { text: "D. 35799", correct: false},
            { text: "E. 35769", correct: false},
        ]
    },

    {
        question: "Pilihlah analogi yang paling tepat: Panas : Dingin :: Keras : ...",
        answers: [
            { text: "A. Lunak", correct: true},
            { text: "B. Jauh", correct: false},
            { text: "C. Dekat", correct: false},
            { text: "D. Besar", correct: false},
            { text: "E. Tinggi", correct: false},
        ]
    },

    {
        question: "Jika LAMPU = 12-1-13-16-21 dan GELAP = 7-5-12-1-16, berapakah nilai dari MULIA?",
        answers: [
            { text: "A. 13-21-12-9-1", correct: false},
            { text: "B. 14-22-13-10-2", correct: true},
            { text: "C. 12-21-13-9-2", correct: false},
            { text: "D. 13-20-12-9-1", correct: false},
            { text: "E. Salah Semua", correct: false},
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
