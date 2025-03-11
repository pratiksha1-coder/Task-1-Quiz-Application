const questions = [
    {
        question: "Which of the following is not a Javascript data type?",
        answer: [
            { text: "Number", correct: false },
            { text: "String", correct: false },
            { text: "Float", correct: true },
            { text: "Boolean", correct: false },
        ]
    },
    {
        question: "What will type null return?",
        answer: [
            { text: "null", correct: false },
            { text: "object", correct: true },
            { text: "Undefined", correct: false },
            { text: "string", correct: false },
        ]
    },
    {
        question: "What is the correct syntax to declare a constant variable in JavScript?",
        answer: [
            { text: "var name = 'John'", correct: false },
            { text: "let name = 'John'", correct: false },
            { text: "const name = 'John'", correct: true },
            { text: "constant name = 'John'", correct: false },
        ]
    },
    {
        question: "Which is the result of console.log([] == false);?",
        answer: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "TypError", correct: false },
        ]
    },
    {
        question: "Which method is used to remove the last element from an array?",
        answer: [
            { text: "shift()", correct: false },
            { text: "pop()", correct: true },
            { text: "splice", correct: false },
            { text: "remove()", correct: false },
        ]
    },
    {
        question: "Which of the following is the used to execute a function after a delay?",
        answer: [
            { text: "setTimeout()", correct: true },
            { text: "setInterval()", correct: false },
            { text: "delayFunction()", correct: false },
            { text: "wait()", correct: false },
        ]
    },
    {
        question: "What is the default return value of a function in JavaScript if no return satement is provided?",
        answer: [
            { text: "null", correct: false },
            { text: "0", correct: false },
            { text: "undefined", correct: true },
            { text: "false", correct: false },
        ]
    },
    {
        question: "Which keyword is used to define an asynchronous functio?",
        answer: [
            { text: "sync", correct: false },
            { text: "defer", correct: false },
            { text: "async", correct: true },
            { text: "await", correct: false },
        ]
    },
    {
        question: "Which method remove the first element from an array?",
        answer: [
            { text: "pop()", correct: false },
            { text: "shift()", correct: true },
            { text: "slice()", correct: false },
            { text: "unshift()", correct: false },
        ]
    },
    {
        question: "Which function is used to execute code repeatelly at fixed time intervals?",
        answer: [
            { text: "setTimeout()", correct: false },
            { text: "setInterval()", correct: true },
            { text: "repeat()", correct: false },
            { text: "loop", correct: false },
        ]
    },
    {
        question: "How can you convert an object to a JSON string?",
        answer: [
            { text: "JSON.stringify(obj)", correct: true },
            { text: "JSON.parse(obj)", correct: false },
            { text: "obj.toJSON()", correct: false },
            { text: "string(obj)", correct: false },
        ]
    },
    {
        question: "Which of the following is falsy value in JavaScript?",
        answer: [
            { text: "false", correct: false },
            { text: "0", correct: true },
            { text: "{}", correct: false },
            { text: "[]", correct: false },
        ]
    },
    {
        question: "What will console.log(Math.max()); return?",
        answer: [
            { text: "Infinity", correct: false },
            { text: "-Infinity", correct: true },
            { text: "0", correct: false },
            { text: "NaN", correct: false },
        ]
    },
    {
        question: "What will be the out of console.log('10' * '2');?",
        answer: [
            { text: "20", correct: true },
            { text: "102", correct: false },
            { text: "Nan", correct: false },
            { text: "10", correct: false },
        ]
    },
    {
        question: "What dose Array.prototype.map() return?",
        answer: [
            { text: "The same array with modified values", correct: false },
            { text: "A single value", correct: false },
            { text: "A new array with transformed values", correct: true },
            { text: "A string of array elements", correct: false },
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
