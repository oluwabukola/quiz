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
let correct = 0;

function quiz() {
    
     const output = [];
    //For each question
    questions.forEach((currentQuestion, questionNumber) => {
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
             <p class="numquest">Question ${questionNumber + 1} of  ${questions.length} </p>
             <div class="style1"></div>
            <div class="questionbox"> ${currentQuestion.question} </div>
            <div class="answerbox"> ${answer.join('')} </div>
             <button class="submit sub" id="submit-${questionNumber}"  onclick="submitAnswer('${questionNumber}', '${currentQuestion.correctAnswer}')">Submit</button>
            
             </div>
        
            </div>`
            
          );

    });
    quizContainer.innerHTML= output.join('');
    slides = document.querySelectorAll(".slide");
}
function showResult() {
    //console.log('Showing results...')
    const answerContainers = quizContainer.querySelectorAll(".answerbox");
     correct = 0;
     // for each question...
  questions.forEach( (currentQuestion, questionNumber) => {
      const picked = answersSelected.find(a => a.question === questionNumber);
      console.log(picked)
       if (picked.ans === currentQuestion.correctAnswer) {
           correct++;
        
          // picked.ans 
             }
  });

  // show number of correct answers out of total
    console.log(correct);
    quizContainer.remove();
    resultsContainer.innerHTML = `<h2 class="res">congratulations!!!<h2>
    <p class="res">You provided ${correct} correct  answers out of ${questions.length} questions. </p>
    <p class= "res"> You scored ${correct} points.</p>`;
    resultsContainer.style.display = "block";
 
}

let answersSelected = [];

function pickAnswer(questionNumber, letter) {
    console.log(questionNumber, letter);
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
    document.getElementById('next').style.display = 'none';
    console.log(n, currentSlide)
    console.log(n);
     const nextButton = document.querySelector(".button");
    if (n !== 0)
        slides[currentSlide].remove();
        
    slides[n].classList.add('active-slide');
    currentSlide =n;
    console.log(nextButton)
    if (currentSlide === slides.length - 1) {
       
        nextButton.style.display = 'none';  
       
       //nextButton.addEventListener('click', showResult());
        
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

function submitAnswer(questionNumber, correct) {

    console.log(questionNumber);
      //pick the answer selected
    console.log(answersSelected)
      const answer = answersSelected.find(a => a.question == questionNumber);
      const question = questions[questionNumber];
      console.log(question, answer);
    if (answer && question){
        if (answer.ans === question.correctAnswer){
            //color the answer box green
            const selector = `#btn-${questionNumber}-${answer.ans}`;
            const correctDiv = document.querySelector(selector);
            console.log(correctDiv)
            correctDiv.style.backgroundColor = "#3e8e41";
            correct++;
        } else {
            //color the picked answer red and the correct answer green
            const selector = `#btn-${questionNumber}-${answer.ans}`;
            const correctDiv = document.querySelector(selector);
            correctDiv.style.backgroundColor = "red";
            const incorrectDiv = document.querySelector(`#btn-${questionNumber}-${question.correctAnswer}`);
            incorrectDiv.style.backgroundColor = '#3e8e41';
        }
        //show the next button
        if (currentSlide !== slides.length - 1) {
            const next = document.getElementById('next');
        next.style.display = 'block';
        //remove submit button
        const submit = document.getElementById(`submit-${questionNumber}`);
            submit.style.display = 'none';
        }
        if (currentSlide === slides.length - 1) {
            
            document.getElementById('finish').style.display = "block";
            
        }
    }
}
  
quiz();
//showResult();
showSlide(currentSlide);
console.log(slides);