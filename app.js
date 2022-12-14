
let quizData = [
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Lane',
        b: 'Hot Mail landed',
        c: 'How to Make Lasagna',
        d: 'Hyper Text Markup Language',
        correct: 'd'
    },

    {
        question: 'How many tags are in a regular element?',
        a: '2',
        b: '1',
        c: '3',
        d: 'All of the above',
        correct: 'a'
    },

    {
        question: 'What is the difference between an opening tag and a closing tag?',
        a: 'Opening tag has a / in front',
        b: 'Closing tag has a / in front',
        c: 'There is no difference',
        d: 'None of the above',
        correct: 'b'
    },

    {
        question: 'Which of the following is an example of an empty element?',
        a: '<img/>',
        b: '<img> </img>',
        c: '</img>',
        d: 'All of the above',
        correct: 'a'
    },

    {
        question: 'What does <a href= "http://www.google.com" title = "Link to Google" target = "_blank">Google</a> do?',
        a: 'Nothing',
        b: 'Adds a search engine to the page',
        c: 'Adds a link to google on the page',
        d: 'None of the above',
        correct: 'c'
    },

    {
        question: 'What should values always be enclosed in?',
        a: 'Quotation marks',
        b: 'Commas',
        c: 'Parenthesis',
        d: 'Square bracket',
        correct: 'a'
    },

    {
        question: 'Where do all items for the same website need to be saved?',
        a: 'Where ever is fine',
        b: 'In the same folder',
        c: 'In different folders',
        d: 'In the desktop',
        correct: 'b'
    },
    {
        question: 'Which of the below is the abbreviation of CSS ?',
        a: 'Cascade sheets style',
        b: 'Color and style sheets',
        c: 'Cascading style sheets',
        d: 'Coded Style Sheet',
        correct: 'c'
    },

    {
        question: 'Which of the following is the correct syntax to add the external stylesheet in CSS?',
        a: '<style src = quiz.css>',
        b: '<style src = "quiz.css">',
        c: '<stylesheet> quiz.css </stylesheet>',
        d: '<link rel="stylesheet" type="quiz/css" href="quiz.css">',
        correct: 'd'
    },

    {
        question: 'Which of the below CSS properties is used to change the background color of CSS ?',
        a: 'bg color',
        b: 'color-background',
        c: 'background-color',
        d: 'color',
        correct: 'c'
    },

    {
        question: 'Which of the below CSS class is used to change the text color of CSS ?',
        a: 'background-color',
        b: 'color',
        c: 'color-background',
        d: 'None of the above',
        correct: 'b'
    },

    {
        question: 'Which of the below CSS property is used to add a stroke in the text ?',
        a: 'text-stroke',
        b: 'text-transform',
        c: 'text-decoration',
        d: 'None of the above',
        correct: 'a'
    },

    {
        question: 'Which element is used to represent the transparency of an element in CSS ?',
        a: 'Hover',
        b: 'Opacity',
        c: 'Transparency',
        d: 'Overlay',
        correct: 'b'
    },

    {
        question: 'How do we set the default width of the font in CSS ?',
        a: 'font-stretch',
        b: 'font-weight',
        c: 'text-transform',
        d: 'font-variant',
        correct: 'a'
    },

    {
        question: 'Which of the below CSS properties represent the order of flex items in the grid container ?',
        a: 'order',
        b: 'float',
        c: 'overflow',
        d: 'All of the above',
        correct: 'a'
    },
]

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const aText = document.getElementById('a_text')
const bText = document.getElementById('b_text')
const cText = document.getElementById('c_text')
const dText = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()

    if(answer){
        if(answer == quizData[currentQuiz].correct) {
            score ++
        }

        currentQuiz ++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else {
            let percentage = Math.round((score/quizData.length) * 100)
            if(percentage >= 50) {
                quiz.innerHTML = `
                <h2>You have answered ${score}/${quizData.length} questions correctly. This translates to ${percentage}%</h2>
                <h1>Congratulations!</h1>
                <button onclick="location.reload()">Reload</button>
            `
            }
            else{
                quiz.innerHTML = `
                <h2>You have answered ${score}/${quizData.length} questions correctly. This translates to ${percentage}%</h2>
                <h1>You want a retake? Click the button below</h1>
                <button onclick="location.reload()">Reload</button>
            `
            }
        }
    }
})










