const quizData = [
    {
        question: 'How old is Yodamaestro?',
        a: '10',
        b: '17',
        c: '20',
        d: '27',
        correct: 'd'
    }, {
        question: 'What is the most use programming language in 2020?',
        a: 'Java',
        b: 'C / C++',
        c: 'Python',
        d: 'Sex machine',
        correct: 'c'
    }, {
        question: 'Who is he President of USA',
        a: 'Donald Trump',
        b: 'Sang min Park',
        c: 'Dong Chan Shin',
        d: 'Milkno',
        correct: 'a'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    }, {
        question: 'Who is he President of USA',
        a: 'Donald Trump',
        b: 'Sang min Park',
        c: 'Dong Chan Shin',
        d: 'Milkno',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: '1993',
        correct: 'c'
    }
]

const questionEl = document.getElementById("question");
const quiz=document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');
const answerEls= document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectedAnswer();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer=undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer=answerEl.id;
        }
    });

    return answer;
}
 
function deselectedAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked=false;
    });
    console.log('hio');
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected(); 

    if (answer) {
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;   
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML=
            `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});