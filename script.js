let questions = [
    {
        question: " WWW is the accronymn for?",
        answer: {
            A: "world wide WAN",
            B: "wide web work",
            C: "world wide web",
            D: "website word"
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is an extension of graphic files?",
        answer: {
            A: ".BMP",
            B: ".TXT",
            C: ".DOC",
            D: ".CSS"
        },
        correctAnswer: "A"
    },

    {
        question: "How many KB makes 1MB?",
        answer: {
            A: 2048,
            B: 1042,
            C: 1204,
            D: 1024
        },
        correctAnswer: "D"

    },

    {
        question: "How many bits make a byte?",
        answer: {
            A: 16,
            B: 8,
            C: 4,
            D: 2
        },
        correctAnswer: "B"
    },

    {
        question: "Files are organied in?",
        answer: {
            A: "Directories",
            B: " RAM",
            C: " Cache",
            D: " ROM"
        },
        correctAnswer: "A"
    }
];
let quizContainer = document.querySelectorAll(".quizcontainer");
let questionContainer = document.querySelector('.questionbox');
let answerContainer = document.querySelectorAll(".btn");
let submitButon = document.querySelector(".submit");
let answer;
let output;
function quiz() {

     output = [];
    //For each question
    questions.forEach((currentQuestion, questionNumber) => {
        answer= [];
        //for each aveilable answer
        for (option in currentQuestion.answer) {
            answer.push(`${currentQuestion.answer[option]}`);
        }
         //adding thw question and answer in an output
         output.push(
            // `<div class="questionbox"> ${currentQuestion.question} </div>
            // <div class="btn"> ${answer.join('')} </div>`
             ` ${currentQuestion.question} 
             ${answer} `
          );
        answerContainer.innerHTML = answer;
        questionContainer.innerHTML = output;

    });

    
}


function showAnswer() {
    
}

//To display quz question
quiz();

//On submit show the correct answer in green background and wrong answer in red background
submitButon.addEventListener('click', showAnswer);

