const questions = [
    {
        question: 'Bacalah kutipan berikut: "Pendidikan adalah senjata paling ampuh yang bisa kita gunakan untuk mengubah dunia." Kutipan ini berasal dari tokoh sejarah terkenal. Siapakah penulis kutipan ini?',
        answers: [
            { text: "A. Mahatma Gandhi", correct: false},
            { text: "B. Nelson Mandela", correct: true},
            { text: "C. Albert Einstein", correct: false},
            { text: "D. Martin Luther King Jr.", correct: false},
            { text: "E. Winston Churchill", correct: false},
        ]
    },

    {
        question: 'Identifikasi jenis teks berikut: "Pada suatu hari yang cerah, Rini dan teman-temannya pergi ke taman bermain untuk merayakan ulang tahun Rini yang ke-10. Mereka bermain sepuas hati dan menikmati kue ulang tahun bersama." Jenis teks ini adalah...',
        answers: [
            { text: "A. Berita", correct: false},
            { text: "B. Cerpen", correct: false},
            { text: "C. Deskripsi", correct: true},
            { text: "D. Teks Ulasan", correct: false},
            { text: "E. Teks Fungsional", correct: false},
        ]
    },

    {
        question: "Pilih sinonim dari kata 'berpengetahuan'!",
        answers: [
            { text: "A. Bijaksana", correct: false},
            { text: "B. Bodoh", correct: false},
            { text: "C. Berilmu", correct: true},
            { text: "D. Penyayang", correct: false},
            { text: "E. Ceroboh", correct: false},
        ]
    },

    {
        question: 'Carilah kesalahan tata bahasa dalam kalimat berikut: "Siswa-siswa tersebut telah mengumpulkan uang sebanyak Rp 500.000 untuk kegiatan sosial."',
        answers: [
            { text: "A. Kesalahan pada kata 'siswa-siswa'", correct: false},
            { text: "B. Kesalahan pada kata 'telah'", correct: false},
            { text: "C. Kesalahan pada kata 'uang'", correct: false},
            { text: "D. Kesalahan pada kata 'sebanyak'", correct: false},
            { text: "E. Tidak ada kesalahan", correct: true},
        ]
    },

    {
        question: 'Identifikasi gaya bahasa pada kalimat berikut: "Senja merambat perlahan di ufuk barat, meninggalkan warna-warna indah yang merona."',
        answers: [
            { text: "A. Metafora", correct: true},
            { text: "B. Simile", correct: false},
            { text: "C. Anafora", correct: false},
            { text: "D. Elipsis", correct: false},
            { text: "E. Hiperteks", correct: false},
        ]
    },

    {
        question: "Pilih kata yang memiliki makna paling mirip dengan kata 'merajut'.",
        answers: [
            { text: "A. Menebar", correct: false},
            { text: "B. Menanam", correct: false},
            { text: "C. Menjahit", correct: true},
            { text: "D. Membaca", correct: false},
            { text: "E. Menyanyikan", correct: false},
        ]
    },

    {
        question: "Identifikasi fungsi sosial teks berikut: 'Panduan Penggunaan Smartphone Android'",
        answers: [
            { text: "A. Fungsi Menghibur", correct: false},
            { text: "B. Memberikan Informasi", correct: true},
            { text: "C. Mendeskripsikan", correct: false},
            { text: "D. Mempengaruhi", correct: false},
            { text: "E. Mendongeng", correct: false},
        ]
    },

    {
        question: "Apa jenis puisi yang memiliki jumlah baris yang tetap dan biasanya memiliki pola rima tertentu?",
        answers: [
            { text: "A. Puisi Bebas", correct: false},
            { text: "B. Puisi Syair", correct: false},
            { text: "C. Puisi Pantun", correct: false},
            { text: "D. Puisi Limerick", correct: false},
            { text: "E. Puisi Sonnet", correct: true},
        ]
    },

    {
        question: "Pilih kata yang memiliki makna paling berlawanan dengan kata 'ramah'.",
        answers: [
            { text: "A. Dermawan", correct: false},
            { text: "B. Jujur", correct: false},
            { text: "C. Dingin", correct: true},
            { text: "D. Santun", correct: false},
            { text: "E. Sopan", correct: false},
        ]
    },

    {
        question: "Tentukan unsur intrinsik dari cerpen berikut: 'Sebuah Cinta di Musim Semi'",
        answers: [
            { text: "A. Tema", correct: false},
            { text: "B. Sudut Pandang", correct: false},
            { text: "C. Latar", correct: false},
            { text: "D. Amanat", correct: false},
            { text: "E. Semua jawaban benar", correct: true},
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
