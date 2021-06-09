export const quizTitle = (quizId) => {
  if (quizId==="html_quiz") return "HTML" 
  if (quizId==="css_quiz") return "CSS"
  if (quizId==="js_quiz") return "JS"
  return quizId
}