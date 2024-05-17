
const quizQuestions = [
    {
        question: "what is the capital of france",
        options: ["London","Rome","Paris","Berlin"],
        answer: "Paris"
    },
    {
        question: "How many continents are there",
        options: ["7","8","5","9"],
        answer: "7"
    },
    {
        question: "what is the largest planet in our solar system",
        options: ["Mercury","Mars","Jupiter","Earth"],
        answer: "Jupiter"
    },
    {
        question: "what is the longest river in the world",
        options: ["Amazon","Nile","Mississippi","Yangtze"],
        answer: "Nile"
    },
    {
        question: "what is the chemical symbol of water",
        options: ["Wa","O2","H2O","He"],
        answer: "H2O"   
     }
];


const questionElement = document.getElementById("questions");

const optionElement = [ document.getElementById("option1"),
                        document.getElementById("option2"),
                        document.getElementById("option3"),
                        document.getElementById("option4") ];
const nextElement = document.getElementById("next"); 

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;



function displayQuestion() {

const currentQuestion = quizQuestions[currentQuestionIndex];
questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
for(i=0;i<=optionElement.length;i++){
    optionElement[i].textContent = currentQuestion.options[i];
    optionElement[i].style.backgroundColor = '';
}
}

  
function selectOption(optionIndex){

    selectedOption = quizQuestions[currentQuestionIndex].options[optionIndex];

    for(i=0;i<optionElement.length;i++){
        if(i===optionIndex){
            optionElement[i].style.backgroundColor = 'lightblue';
        }
        else {
            optionElement[i].style.backgroundColor = '';
        }
    }
}


function nextButton() {

   if(!selectedOption) {

    alert("Select an option");
    return;

   }

   if(selectedOption === quizQuestions[currentQuestionIndex].answer){

    score++;

   }

   currentQuestionIndex++;

   if(currentQuestionIndex < quizQuestions.length){

    displayQuestion();
   }
   else {

    questionElement.textContent = `Quiz complete! You scored ${score}/${quizQuestions.length}`;
    for(i=0;i<optionElement.length;i++){
        optionElement[i].style.display = "none";
    }
    nextElement.style.display = "none";
   }
   selectedOption = null;
   }
displayQuestion();












  