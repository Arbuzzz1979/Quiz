import React, { useContext, useState } from "react";
//IMPORT DATA
import quizData from "../assets/data/quiz_data";

const initQuizData = quizData();
const QuizContext = React.createContext();

export function useQuiz() {
  return useContext(QuizContext);
}

export default function QuizProvaider({ children }) {
  //STATE
  //Init data
  const [quizData, setQuizData] = useState(initQuizData);
  //Current quiz
  const [quiz, setQuiz] = useState();
  const [numberQuestions, setNumberQuestions] = useState();
  const [quizInfo, setInfoQuiz] = useState();
  //Steps of quiz
  const [step, setStep] = useState(1);
  //Current score and answer
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [answers, setAnswers] = useState([]);
  //Total score
  const [showScore, setShowScore] = useState(false);

  //INIT QUIZ
  function initQuiz(quizId) {
    const number_of_questions=quizData.filter(quiz => quiz.id === quizId)[0].number_of_questions;
    setNumberQuestions(number_of_questions);
    const questions=quizData.filter(quiz => quiz.id === quizId)[0].questions;
    setShowScore(false);
    setQuiz(randomQuizQuestion(questions, number_of_questions));
    setInfoQuiz(quizData.filter(quiz => quiz.id === quizId)[0])
    setStep(1);
    setScore(0);
    setPoints(0);
    setCurrentAnswer([]);
    setAnswers([]);
  }

  function getQuizInfo(quizId) {
    return quizData.filter(quiz => quiz.id === quizId)[0]
  }

  //NEXT STEP HANDLER
  function next() {
    setStep(step + 1);
    const index = quiz.findIndex((item) => item.currentId === step);

    if (index !== -1) {
      let newArr = quiz.map((item) => {
        if (item.currentId === index - 1) {
          return { ...item, completed: true };
        } else if (item.currentId === index) {
          return { ...item, active: true };
        } else {
          return item;
        }
      });
      // console.log("newArr", newArr);
      setQuiz(newArr);
    } 

    // Сохранить способ
    // setQuiz(
    // quiz.map(item =>
    //     item.id === index
    //     ? {...item, completed: true, }
    //     : item
    // ))
  }


  function randomQuizQuestion (questions, number) {
    console.log("questions=>>>>>>>>",questions)
    let randomQuestions =[]
    for (let i = 0 ; (i < number) && (i < questions.length) ; i++) {
      let r = Math.floor(Math.random() * (questions.length - i)) + i;
      let question = questions[r];
      questions[r] = questions[i];
      questions[i] = question;
      if (i===0) {
        randomQuestions.push({...question, currentId:i, active: true});
      } else {
        randomQuestions.push({...question, currentId:i});
      } 
    }
    return randomQuestions
  }


  function getQuestion() {
    return quiz && quiz[step - 1].questionText;
  }

  function getAnswer() {
    return quiz && quiz[step - 1].answerOptions;
  }

  function getPoint() {
    return quiz && quiz[step - 1].point;
  }

  function handlerAnswer(isCorrect,isAnswer) {
    let arrAnswers = answers
    arrAnswers.push({
      currentId: quiz[step-1].currentId,
      id: quiz[step-1].id,
      isCorrect: isCorrect,
      isAnswer:isAnswer
    })
    setAnswers(arrAnswers)

    

    if (isCorrect) {
      setScore(score + 1);
      console.log("points", points)
      setPoints(prev => prev + quiz[step - 1].point)
      
    }
    isCorrect? currentAnswer.push(true) : currentAnswer.push(false)

    if (step < quiz.length) {
      next();
    } else {
      setQuiz(
        quiz.map((item) =>
          item.currentId === quiz.length-1 ? { ...item, completed: true } : item
        )
      );
      setShowScore(true);
    }
  }

  const value = {
    quizData,
    initQuiz,
    step,
    next,
    quiz,
    quizInfo,
    numberQuestions,
    getQuestion,
    getAnswer,
    handlerAnswer,
    showScore,
    setShowScore,
    score,
    points,
    currentAnswer,
    answers,
    getQuizInfo
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
