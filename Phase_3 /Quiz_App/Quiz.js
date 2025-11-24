let mainBox = document.getElementById("mainBox");
let quesBox = document.getElementById("quesBox");

let questionData = [
    {
        question: "Which of the following is a programming language?",
        options: ["HTML", "Python", "CSS", "Photoshop"],
        answer: "Python"
    },
    {
        question: "What is the main purpose of a function in programming?",
        options: ["Store data permanently", "Execute a set of instructions", "Style the webpage", "Create a new file"],
        answer: "Execute a set of instructions"
    },
    {
        question: "Which of these is used to store multiple values in a single variable in Python?",
        options: ["int", "list", "float", "bool"],
        answer: "list"
    },
    {
        question: "In JavaScript, what symbol is used for single-line comments?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//"
    },
    {
        question: "Which of the following is an example of a conditional statement?",
        options: ["if (x > 5)", "for (i = 0; i < 10; i++)", "let x = 10;", "console.log('Hello');"],
        answer: "if (x > 5)"
    },
    {
        question: "What is an array?",
        options: ["A function that repeats itself", "A collection of items stored in order", "A type of loop", "A mathematical operation"],
        answer: "A collection of items stored in order"
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Management Language", "Hyper Transfer Markup Language"],
        answer: "HyperText Markup Language"
    },
    {
        question: "Which of the following is a way to create a loop in Python?",
        options: ["for i in range(5):", "while (i < 5):", "Both A and B", "loop i from 1 to 5"],
        answer: "Both A and B"
    },
    {
        question: "Which of these is used to style a webpage?",
        options: ["HTML", "JavaScript", "CSS", "Python"],
        answer: "CSS"
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["let x = 10;", "int x = 10;", "x := 10;", "var = 10 x;"],
        answer: "let x = 10;"
    }
];

let questionNum = 0;
let score = 0;
let selectedOption = null;


function showQuestionAnswer() {
    let q = questionData[questionNum];
    let showQuestion = `<h1>Question ${questionNum + 1} of ${questionData.length}</h1>`;
    showQuestion += `<p>${q.question}</p>`;

    q.options.forEach(option => {
        showQuestion += `<button class="optionBtn" onclick="selectOption('${option}')">${option}</button>`;
    });

    showQuestion += `<button id="nextBtn" onclick="Submit()">Next</button>`;
    quesBox.innerHTML = showQuestion;
}

function selectOption(option) {
    selectedOption = option;

    const buttons = document.querySelectorAll(".optionBtn");
    buttons.forEach(btn => {
        btn.classList.remove("selected");
        if (btn.innerText === option) {
            btn.classList.add("selected");
        }
    });
}



function Submit() {
    if (!selectedOption) {
        alert("Please select an option before continuing!");
        return;
    }

    if (selectedOption === questionData[questionNum].answer) {
        score++;
    }
    questionNum++;
    selectedOption = null;

    if (questionNum < questionData.length) {
        showQuestionAnswer();
    } else {
        showResult();
    }
}
function showResult() {
    let result = `
        <h1 id ="congmeass">🎉 Congratulations! 🎉</h1>
        <p>You completed the quiz successfully!</p>
        <h2>Your Score: ${score} out of ${questionData.length} </h2>
        <button id="startAgainBtn">Start Quiz Again</button>
        <p id="afterMsg">
            Keep learning and improving every day!
        </p>
    `;

    quesBox.innerHTML = result;

    // Button event for restart
    const startAgainBtn = document.getElementById("startAgainBtn");
    startAgainBtn.addEventListener("click", () => {
        restartQuiz();
    });
}

function restartQuiz() {
    questionNum = 0;
    score = 0;
    selectedOption = null;
    quesBox.innerHTML = `<div id="quesBox" class="quesBox2"></div>`;
    quesBox = document.getElementById("quesBox");


    showQuestionAnswer();
}

showQuestionAnswer();

