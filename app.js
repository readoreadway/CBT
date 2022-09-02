
let quizData = [
    {
        question: 'Which of the below is the abbreviation of CSS ?',
        a: 'Cascade sheets style',
        b: 'Color and style sheets',
        c: 'Cascading style sheets',
        d: 'Coded Style Sheet',
        answer: 'c'
    },

    {
        question: 'Which of the following is the correct syntax to add the external stylesheet in CSS?',
        a: '<style src = quiz.css>',
        b: '<style src = "quiz.css">',
        c: '<stylesheet> quiz.css </stylesheet>',
        d: '<link rel="stylesheet" type="quiz/css" href="quiz.css">',
        answer: 'd'
    },

    {
        question: 'Which of the below CSS properties is used to change the background color of CSS ?',
        a: 'bg color',
        b: 'color-background',
        c: 'background-color',
        d: 'color',
        answer: 'c'
    },

    {
        question: 'Which of the below CSS class is used to change the text color of CSS ?',
        a: 'background-color',
        b: 'color',
        c: 'color-background',
        d: 'None of the above',
        answer: 'b'
    },

    {
        question: 'Which of the below CSS property is used to add a stroke in the text ?',
        a: 'text-stroke',
        b: 'text-transform',
        c: 'text-decoration',
        d: 'None of the above',
        answer: 'a'
    },

    {
        question: 'Which element is used to represent the transparency of an element in CSS ?',
        a: 'Hover',
        b: 'Opacity',
        c: 'Transparency',
        d: 'Overlay',
        answer: 'b'
    },

    {
        question: 'How do we set the default width of the font in CSS ?',
        a: 'font-stretch',
        b: 'font-weight',
        c: 'text-transform',
        d: 'font-variant',
        answer: 'a'
    },

    {
        question: 'Which of the below CSS properties represent the order of flex items in the grid container ?',
        a: 'order',
        b: 'float',
        c: 'overflow',
        d: 'All of the above',
        answer: 'a'
    },
]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a__Text = document.getElementById('a__text')
const b__Text = document.getElementById('b__text')
const c__Text = document.getElementById('c__text')
const d__Text = document.getElementById('d__text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    let currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a__Text.innerText = currentQuizData.a
    b__Text.innerText = currentQuizData.b
    c__Text.innerText = currentQuizData.c
    d__Text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id 
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=> {
    const answer = getSelected()

    if (answer) {
        if(answer.id === quizData[currentQuiz].answer) {
            score ++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }
        else {
            quiz.innerHTML = 
            `
                <h2>You have answered ${score}/${quizData.length} questions correctly!</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})


