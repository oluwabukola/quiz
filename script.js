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



let slides = []
let currentSlide = 0;
const quizContainer = document.querySelector('#quiz');
const submitButon = document.querySelector(".submit");
const resultsContainer = document.querySelector("#congrat");
const nextButton = document.querySelector(".button");

function quiz() {
    
     const output = [];
    //For each question
    questions.forEach(
                      (currentQuestion, questionNumber) => {
       const  answer= [];
        //for each aveilable answer
        for (letter in currentQuestion.answer) {
            answer.push(
                `<div class="btnanswer" id="btn-${questionNumber}-${letter}" onclick="pickAnswer(${questionNumber}, '${letter}')" >
                    <input type="hidden" name= "question${questionNumber}"  id="${questionNumber}-${letter}" value="${letter}">
                  ${currentQuestion.answer[letter]}
                </div>`
            );
        }

        //adding thw question and answer in an output
         output.push(
             `<div class="slide">
             <div  class="container">
             <p class="numquest">Question ${questionNumber + 1} of ${questions.length} </p>
             <div class="style1"></div>
            <div class="questionbox"> ${currentQuestion.question} </div>
            <div class="answerbox"> ${answer.join('')} </div>
           
            
    
         
            </div>
            </div>`
            
          );

    });
    quizContainer.innerHTML= output.join('');
    slides = document.querySelectorAll(".slide");
}

function showResult() {
    console.log('Showing results...')
    const answerContainers = quizContainer.querySelectorAll(".answerbox");
    let correct = 0;
     // for each question...
  questions.forEach( (currentQuestion, questionNumber) => {



      const picked = answersSelected.find(a => a.question === questionNumber);
      console.log(picked)
       if (picked.ans === currentQuestion.correctAnswer) {
           correct++;
           const selector = `#btn-${questionNumber}-${picked.ans}`;
           const correctDiv = document.querySelector(selector);
           console.log(correctDiv)
           correctDiv.style.backgroundColor = "green";
       }
    // if answer is wrong or blank
    else{
      // color the answers red
      const selector = `#btn-${questionNumber}-${picked.ans}`;
      const correctDiv = document.querySelector(selector);
      correctDiv.style.backgroundColor = "red";
           const incorrectDiv = document.querySelector(`#btn-${questionNumber}-${currentQuestion.correctAnswer}`);
           incorrectDiv.style.backgroundColor = 'green';
           
    }
  });

  // show number of correct answers out of total
    console.log(correct);
  resultsContainer.innerHTML = `${correct} out of ${questions.length}`;
}
// let button = document.querySelectorAll("#btn");
let answersSelected = []

function pickAnswer(questionNumber, letter) {
        
    if (answersSelected.some(item => item.question === questionNumber)){
        let questionPicked = answersSelected.find(item => item.question === questionNumber);
        questionPicked.ans = letter
    } else {
        let picked = {
            question: questionNumber,
            ans: letter
        }
        
    answersSelected.push(picked);
    }
    console.log(answersSelected)
}

function showSlide(n) {
    console.log(n, currentSlide)
    //console.log(slides)
    const nextButton = document.querySelector(".button");
    if (n !== 0)
        slides[currentSlide].remove();
    slides[n].classList.add('active-slide');
    currentSlide = n;
    console.log(nextButton)
    if(currentSlide === slides.length-1){
        nextButton.style.display = "none";
        
    }
    else {
        nextButton.style.display = 'inline-block';
    
    }
}
function showNextSlide() {
    showSlide(currentSlide + 1);
}
function nextSubmit() {
    const selector = `#btn-${questionNumber}-${picked.ans}`;
           const correctDiv = document.querySelector(selector);
    if (correctDiv) {
        nextButton.style.diplay = "none";
        
    }
      
  }
  
//quiz();
//showResult();
showSlide(currentSlide);
console.log(slides);