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

// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');


// const submitButton = document.getElementById('submit');
const quizContainer = document.querySelectorAll(".container");
const submitButon = document.querySelector(".submit");

function quiz() {
    
     const output = [];
    //For each question
    questions.forEach(
                      (currentQuestion, questionNumber) => {
       const  answer= [];
        //for each aveilable answer
        for (letter in currentQuestion.answer) {
            answer.push(
                
                `<div id="btn" onclick="pickAnswer(${questionNumber}, ${letter}) >
                  ${currentQuestion.answer[letter]}
                </div>`
                
              );
        }

        //adding thw question and answer in an output
         output.push(
            `<div class="questionbox"> ${currentQuestion.question} </div>
            <div class="answerbox"> ${answer.join('')} </div>`
          );


    });
    quizContainer.innerHTML= output.join(''); 
}
function showResult() {
    const answerContainers = quizContainer.querySelectorAll(".answer");
    let correct = 0;

    // for each question...
  questions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    //const answerContainer = answerContainers[questionNumber];
      //const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      const picked = answersSelected.find(a => a.question === questionNumber);
      if (picked.ans === currentQuestion.correctAnswer) {
          correct++;
          

      }

      // if answer is correct
    //   if (userAnswer === currentQuestion.correctAnswer) {
    //       // add to the number of correct answers
    //       Correct++;
    //       // color the answers green
    //   answerContainers[questionNumber].style.color = 'lightgreen';
    // }
    // // if answer is wrong or blank
    // else{
    //   // color the answers red
    //   answerContainers[questionNumber].style.color = 'red';
    // }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
let button = document.querySelectorAll("#btn");
let answersSelected = []

function pickAnswer(questionNumber, letter) {
    let picked = {
        question: que,
        ans: answerPicked
    }
    answersSelected.push(answer);

}