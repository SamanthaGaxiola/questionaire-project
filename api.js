async function getCategories(callback) {
  const api = 'http://opentdb.com/api_category.php'
  const response = await fetch(api)
  const data = await response.json()
  callback(data.trivia_categories)
}

async function getQuestion(options) {
  const api = `https://opentdb.com/api.php?amount=${options.numberofquestions}&category=${options.category}&difficulty=${options.difficultypart}&type=multiple`
  const response = await fetch(api)
  const data = await response.json()
  options.callback(data.results)
}
export { getCategories, getQuestion }
