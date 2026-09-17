/* =====================================================
   ECE QUIZ
   LOGIN + QUIZ SYSTEM
===================================================== */


/* =====================================================
   LOGIN SYSTEM
===================================================== */

const loginPage =
    document.getElementById("loginPage");

const quizPage =
    document.getElementById("quizPage");

const sprInput =
    document.getElementById("sprNumber");

const dobInput =
    document.getElementById("dobPassword");

const loginButton =
    document.getElementById("loginButton");

const loginError =
    document.getElementById("loginError");

const showPassword =
    document.getElementById("showPassword");


/* SHOW / HIDE PASSWORD */

showPassword.addEventListener(
    "click",
    () => {

        if (dobInput.type === "password") {

            dobInput.type = "text";

            showPassword.textContent = "🙈";

        } else {

            dobInput.type = "password";

            showPassword.textContent = "👁";

        }

    }
);


/* LOGIN */

loginButton.addEventListener(
    "click",
    loginStudent
);


/* ENTER KEY LOGIN */

sprInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            dobInput.focus();

        }

    }
);


dobInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            loginStudent();

        }

    }
);


function loginStudent() {

    const sprNumber =
        sprInput.value.trim();

    const dob =
        dobInput.value.trim();


    /* CHECK SPR */

    if (sprNumber === "") {

        showLoginError(
            "⚠️ Please enter your SPR Number."
        );

        sprInput.focus();

        return;

    }


    /* CHECK DOB */

    if (dob === "") {

        showLoginError(
            "⚠️ Please enter your Date of Birth."
        );

        dobInput.focus();

        return;

    }


    /*
       BASIC DOB FORMAT CHECK

       DD/MM/YYYY
    */

    const dobPattern =
        /^\d{2}\/\d{2}\/\d{4}$/;


    if (!dobPattern.test(dob)) {

        showLoginError(
            "⚠️ Enter DOB in DD/MM/YYYY format."
        );

        dobInput.focus();

        return;

    }


    /* LOGIN SUCCESS */

    loginError.textContent = "";

    loginError.classList.remove("show");


    loginButton.textContent =
        "✓ LOGIN SUCCESSFUL";


    loginButton.style.background =
        "linear-gradient(90deg, #00ffb3, #00aaff)";


    setTimeout(
        () => {

            loginPage.classList.add(
                "hidden"
            );

            quizPage.classList.remove(
                "hidden"
            );

            loadQuestion();

        },
        700
    );

}


/* LOGIN ERROR */

function showLoginError(message) {

    loginError.textContent =
        message;

    loginError.classList.remove(
        "show"
    );


    void loginError.offsetWidth;


    loginError.classList.add(
        "show"
    );

}


/* =====================================================
   QUIZ QUESTIONS
===================================================== */

const questions = [

    {
        question: "What does ECE stand for?",

        options: [
            "Electrical and Computer Engineering",
            "Electronics and Communication Engineering",
            "Electronic Computer Equipment",
            "Electrical Communication Equipment"
        ],

        answer: 1,

        hint:
            "It combines Electronics with Communication.",

        difficulty: "NORMAL"
    },


    {
        question:
            "Which component is mainly used to store electrical charge?",

        options: [
            "Resistor",
            "Capacitor",
            "Diode",
            "Transistor"
        ],

        answer: 1,

        hint:
            "Think of it like a tiny electrical storage tank.",

        difficulty: "NORMAL"
    },


    {
        question:
            "What is the SI unit of resistance?",

        options: [
            "Volt",
            "Ampere",
            "Ohm",
            "Watt"
        ],

        answer: 2,

        hint:
            "Its symbol is Ω.",

        difficulty: "NORMAL"
    },


    {
        question:
            "Which device converts AC into DC?",

        options: [
            "Transformer",
            "Rectifier",
            "Oscillator",
            "Amplifier"
        ],

        answer: 1,

        hint:
            "It commonly uses diodes.",

        difficulty: "NORMAL"
    },


    {
        question:
            "Which component is commonly used as an electronic switch?",

        options: [
            "Capacitor",
            "Transistor",
            "Resistor",
            "Inductor"
        ],

        answer: 1,

        hint:
            "It can switch current ON and OFF.",

        difficulty: "NORMAL"
    },


    {
        question:
            "What is the SI unit of frequency?",

        options: [
            "Volt",
            "Hertz",
            "Ohm",
            "Tesla"
        ],

        answer: 1,

        hint:
            "Radio and communication systems use this unit.",

        difficulty: "NORMAL"
    },


    {
        question:
            "Which instrument is used to measure voltage?",

        options: [
            "Ammeter",
            "Voltmeter",
            "Wattmeter",
            "Oscillator"
        ],

        answer: 1,

        hint:
            "Its name starts with 'Volt'.",

        difficulty: "NORMAL"
    },


    {
        question:
            "What is the function of an antenna?",

        options: [
            "Store electricity",
            "Transmit and receive electromagnetic waves",
            "Increase resistance",
            "Convert AC to DC"
        ],

        answer: 1,

        hint:
            "Think about radio, TV and mobile signals.",

        difficulty: "NORMAL"
    },


    {
        question:
            "Which logic gate gives HIGH output only when all inputs are HIGH?",

        options: [
            "OR",
            "NOT",
            "AND",
            "XOR"
        ],

        answer: 2,

        hint:
            "Every input must say YES.",

        difficulty: "NORMAL"
    },


    {
        question:
            "What does LED stand for?",

        options: [
            "Light Emitting Diode",
            "Low Energy Device",
            "Light Electronic Display",
            "Linear Emitting Device"
        ],

        answer: 0,

        hint:
            "It is a diode that produces light.",

        difficulty: "NORMAL"
    },


    {
        question:
            "Which material is commonly used to make semiconductor devices?",

        options: [
            "Wood",
            "Silicon",
            "Rubber",
            "Glass"
        ],

        answer: 1,

        hint:
            "It is one of the most important materials in electronics.",

        difficulty: "NORMAL"
    },


    {
        question:
            "What is the main purpose of a resistor?",

        options: [
            "Store charge",
            "Limit current",
            "Produce light",
            "Generate frequency"
        ],

        answer: 1,

        hint:
            "It controls the amount of current flowing.",

        difficulty: "NORMAL"
    },


    {
        question:
            "Which communication system uses electromagnetic waves?",

        options: [
            "Radio",
            "Mobile communication",
            "Satellite communication",
            "All of these"
        ],

        answer: 3,

        hint:
            "Radio, mobile and satellites all use EM waves.",

        difficulty: "NORMAL"
    },


    {
        question:
            "What does CPU stand for?",

        options: [
            "Central Processing Unit",
            "Computer Power Unit",
            "Central Program Utility",
            "Control Processing User"
        ],

        answer: 0,

        hint:
            "It is often called the brain of a computer.",

        difficulty: "NORMAL"
    },


    {
        question:
            "Which signal has continuously varying values?",

        options: [
            "Digital signal",
            "Binary signal",
            "Analog signal",
            "Logic signal"
        ],

        answer: 2,

        hint:
            "Think of a continuously changing waveform.",

        difficulty: "NORMAL"
    },


    /* LAST 5 EASY QUESTIONS */

    {
        question:
            "How many pins does a typical LED have?",

        options: [
            "1",
            "2",
            "5",
            "10"
        ],

        answer: 1,

        hint:
            "One for each connection.",

        difficulty: "EASY"
    },


    {
        question:
            "Which color usually represents a positive or OK indicator?",

        options: [
            "Green",
            "Black",
            "Brown",
            "Grey"
        ],

        answer: 0,

        hint:
            "Think of a green indicator light.",

        difficulty: "EASY"
    },


    {
        question:
            "Which device is used to watch a video?",

        options: [
            "Display",
            "Resistor",
            "Diode",
            "Capacitor"
        ],

        answer: 0,

        hint:
            "You are looking at one right now!",

        difficulty: "EASY"
    },


    {
        question:
            "Which component looks like a tiny light?",

        options: [
            "LED",
            "Resistor",
            "Transistor",
            "Inductor"
        ],

        answer: 0,

        hint:
            "It literally produces light.",

        difficulty: "EASY"
    },


    {
        question:
            "Which subject is closely related to ECE?",

        options: [
            "Electronics",
            "Communication",
            "Both Electronics and Communication",
            "Cooking"
        ],

        answer: 2,

        hint:
            "The answer is basically in the name ECE! 😄",

        difficulty: "EASY"
    }

];


/* =====================================================
   QUIZ VARIABLES
===================================================== */

let currentQuestion = 0;

let score = 0;

let streak = 0;

let bestStreak = 0;

let answered = false;


/* =====================================================
   ELEMENTS
===================================================== */

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const questionNumberElement =
    document.getElementById("questionNumber");

const sideQuestionElement =
    document.getElementById("sideQuestion");

const scoreElement =
    document.getElementById("score");

const sideScoreElement =
    document.getElementById("sideScore");

const progressElement =
    document.getElementById("progress");

const progressPercentElement =
    document.getElementById("progressPercent");

const hintElement =
    document.getElementById("hint");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextButton");

const robotText =
    document.getElementById("robotText");

const funComment =
    document.getElementById("funComment");

const difficultyElement =
    document.getElementById("difficulty");

const motivationMessage =
    document.getElementById("motivationMessage");

const streakElement =
    document.getElementById("streak");

const bigStreakElement =
    document.getElementById("bigStreak");

const streakFire =
    document.getElementById("streakFire");

const resultScreen =
    document.getElementById("resultScreen");

const finalScore =
    document.getElementById("finalScore");

const finalBestStreak =
    document.getElementById("bestStreak");

const resultMessage =
    document.getElementById("resultMessage");

const restartButton =
    document.getElementById("restartButton");

const logoutButton =
    document.getElementById("logoutButton");


/* =====================================================
   MOTIVATIONAL WORDS
===================================================== */

const correctMotivation = [

    "🚀 Excellent! Keep moving forward!",

    "🔥 Brilliant! Your knowledge is growing!",

    "⚡ Fantastic! You're getting stronger!",

    "🧠 Smart choice! Keep that brain powered!",

    "🏆 Great work! One step closer!",

    "💪 Well done! Don't stop now!",

    "🌟 Amazing! Future Engineer in action!",

    "🔋 Fully charged brain! Keep going!",

    "🎯 Perfect hit! Stay focused!",

    "🤖 Even the robot is impressed!"

];


const wrongMotivation = [

    "💪 Keep going! One mistake won't stop you.",

    "🌟 Don't give up — the next one is yours!",

    "🧠 Learn from it and move forward!",

    "⚡ Stay positive! Engineers solve problems.",

    "🚀 Reset your brain and attack the next one!",

    "😎 No worries! You've got this!",

    "🔧 Wrong answer, right attitude!",

    "🔥 Your streak may stop, but your learning doesn't!",

    "💡 Every mistake teaches something new.",

    "🤖 The robot says: Try again, Engineer!"

];


const thinkingMessages = [

    "Your brain is loading... 🤖",

    "Hmm... activate ECE mode! ⚡",

    "Don't let the electrons escape! 😂",

    "Think like an engineer! 🧠",

    "You can do this! 🚀"

];


const correctMessages = [

    "Boom! Correct! 🔥",

    "Nice one, Engineer! 😎",

    "The electrons are happy! ⚡",

    "Brain power activated! 🧠",

    "Excellent! Keep going! 🚀"

];


const wrongMessages = [

    "Oops! The electrons disagreed! 😂",

    "Almost! Don't short-circuit! 😅",

    "Wrong wire, Engineer! 🔌",

    "No worries! Try the next one! 😎",

    "Even robots make mistakes! 🤖"

];


function randomItem(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


/* =====================================================
   LOAD QUESTION
===================================================== */

function loadQuestion() {

    answered = false;

    const current =
        questions[currentQuestion];


    questionElement.textContent =
        current.question;


    questionNumberElement.textContent =
        currentQuestion + 1;


    sideQuestionElement.textContent =
        currentQuestion + 1;


    scoreElement.textContent =
        score;


    sideScoreElement.textContent =
        score;


    hintElement.textContent =
        current.hint;


    difficultyElement.textContent =
        current.difficulty;


    difficultyElement.classList.remove(
        "easy"
    );


    if (current.difficulty === "EASY") {

        difficultyElement.classList.add(
            "easy"
        );

    }


    const percentage =
        ((currentQuestion + 1) /
        questions.length) * 100;


    progressElement.style.width =
        percentage + "%";


    progressPercentElement.textContent =
        Math.round(percentage) + "%";


    robotText.textContent =
        randomItem(thinkingMessages);


    if (current.difficulty === "EASY") {

        funComment.textContent =
            "😎 Easy mode activated!";

    } else {

        funComment.textContent =
            "🧠 Think carefully...";

    }


    motivationMessage.textContent =
        "🚀 Believe in yourself!";

    motivationMessage.className =
        "motivation-message";


    answersElement.innerHTML = "";


    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];


    current.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.classList.add(
                "answer"
            );


            button.innerHTML = `
                <span class="answer-letter">
                    ${letters[index]}
                </span>

                <span>
                    ${option}
                </span>
            `;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    feedbackElement.textContent = "";

    feedbackElement.className =
        "feedback";


    nextButton.disabled = true;


    updateStreakUI();

}


/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {

        return;

    }


    answered = true;


    const current =
        questions[currentQuestion];


    const allButtons =
        document.querySelectorAll(
            ".answer"
        );


    allButtons.forEach(
        button => {

            button.style.pointerEvents =
                "none";

        }
    );


    /* CORRECT */

    if (
        selectedIndex ===
        current.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );


        score++;

        streak++;


        if (streak > bestStreak) {

            bestStreak =
                streak;

        }


        scoreElement.textContent =
            score;


        sideScoreElement.textContent =
            score;


        feedbackElement.textContent =
            "✓ CORRECT! " +
            randomItem(
                correctMessages
            );


        feedbackElement.classList.add(
            "correct-feedback"
        );


        motivationMessage.textContent =
            randomItem(
                correctMotivation
            );


        motivationMessage.classList.add(
            "success"
        );


        robotText.textContent =
            randomItem(
                correctMessages
            );


        funComment.textContent =
            streak >= 3
                ? "🔥 STREAK ON FIRE!"
                : "⚡ Perfect connection!";

    }


    /* WRONG */

    else {

        selectedButton.classList.add(
            "wrong"
        );


        allButtons[
            current.answer
        ].classList.add(
            "correct"
        );


        feedbackElement.textContent =
            "✗ WRONG! " +
            randomItem(
                wrongMessages
            );


        feedbackElement.classList.add(
            "wrong-feedback"
        );


        motivationMessage.textContent =
            randomItem(
                wrongMotivation
            );


        motivationMessage.classList.add(
            "encourage"
        );


        robotText.textContent =
            randomItem(
                wrongMessages
            );


        funComment.textContent =
            "🔧 Reconnecting brain...";


        streak = 0;

    }


    updateStreakUI();


    nextButton.disabled = false;

}


/* =====================================================
   UPDATE STREAK
===================================================== */

function updateStreakUI() {

    streakElement.textContent =
        streak;


    bigStreakElement.textContent =
        streak;


    if (streak > 0) {

        streakFire.classList.add(
            "active"
        );

    } else {

        streakFire.classList.remove(
            "active"
        );

    }


    if (streak >= 5) {

        streakFire.textContent =
            "🔥🔥🔥";

    }

    else if (streak >= 3) {

        streakFire.textContent =
            "🔥🔥";

    }

    else {

        streakFire.textContent =
            "🔥";

    }

}


/* =====================================================
   NEXT QUESTION
===================================================== */

nextButton.addEventListener(
    "click",
    () => {

        if (!answered) {

            return;

        }


        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        }

        else {

            showResult();

        }

    }
);


/* =====================================================
   RESULT
===================================================== */

function showResult() {

    finalScore.textContent =
        score;


    finalBestStreak.textContent =
        bestStreak;


    if (score === 20) {

        resultMessage.textContent =
            "🏆 PERFECT! You are an ECE legend!";

    }

    else if (score >= 16) {

        resultMessage.textContent =
            "🔥 Excellent! Your circuits are working!";

    }

    else if (score >= 12) {

        resultMessage.textContent =
            "😎 Great job! Keep learning ECE!";

    }

    else if (score >= 8) {

        resultMessage.textContent =
            "⚡ Good attempt! Practice makes you stronger!";

    }

    else {

        resultMessage.textContent =
            "😂 Don't worry! Even a capacitor needs time to charge!";

    }


    resultScreen.classList.add(
        "show"
    );

}


/* =====================================================
   RESTART QUIZ
===================================================== */

restartButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        score = 0;

        streak = 0;

        bestStreak = 0;

        resultScreen.classList.remove(
            "show"
        );

        loadQuestion();

    }
);


/* =====================================================
   LOGOUT
===================================================== */

logoutButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        score = 0;

        streak = 0;

        bestStreak = 0;


        resultScreen.classList.remove(
            "show"
        );


        quizPage.classList.add(
            "hidden"
        );


        loginPage.classList.remove(
            "hidden"
        );


        sprInput.value = "";

        dobInput.value = "";

        dobInput.type = "password";

        showPassword.textContent =
            "👁";


        loginButton.textContent =
            "ENTER QUIZ";


        loginButton.style.background =
            "";


        loginError.textContent = "";

    }
);