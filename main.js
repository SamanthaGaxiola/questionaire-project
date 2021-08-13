import { getCategories, getQuestion } from '/api.js'
var currentQuestion = 0
var allQuestions = []


window.addEventListener('DOMContentLoaded', () => {
  //this is for when the page loads
  getCategories(updateCategorySelect)
  //   getDifficulty(updateDifficultySelect)

  const form = document.querySelector('form')

  //this is for when the submit button is clicked
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const difficultypart = document.querySelector('#difficulty').value
    const category = document.querySelector('#category').value
    const numberofquestions = document.querySelector('#N-O-Q').value

    getQuestion({
      difficultypart,
      category,
      numberofquestions,
      callback: startGame,
    })
  })
})

function updateCategorySelect(categories) {
  var select = document.querySelector('#category')
  var optionshtml = categories
    .map((item) => {
      return `<option value=${item.id}>${item.name}</option>`
    })
    .join('')
  select.innerHTML = optionshtml
}
function startGame(questions) {
  var firstQuestion = questions[currentQuestion]
  var questionString = document.querySelector('#question')
  questionString.innerHTML = firstQuestion.question

  // firstQuestion.forEach((element) => console.log(element))

  var listofAnswers = [
    ...firstQuestion.incorrect_answers,
    firstQuestion.correct_answer,
//   ]
//   function shuffle(arr){
//   for (let i = listofAnswers.length -1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i +1))
//     [arr[i]], [arr[j]] = [arr[j]], [arr[i]]

//     document.querySelector(`#answer${i}`).innerHTML = listofAnswers[i]
//   }
// }
