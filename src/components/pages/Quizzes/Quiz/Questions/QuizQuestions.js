import React, { useState, useEffect } from "react";
//IMPORT ELEMENTS
import { HeadingSecondary } from "../elements.sc";
//CONTEXT
import { useQuiz } from "../../../../../contexts/QuizContext";
import { useAuth } from "../../../../../contexts/AuthContext";
import { useModal } from "../../../../../contexts/ModalContext";
//COMPONENTS
import QuizReportList from "../Report/QuizReportList";
import ScoreSection from "./ScoreSection";
import Answers from "./Answers";
import NextButton from "./NextButton";
import QuestionWithCode from "./QuestionWithCode"


//////////////////////////////
// Component: QuizQuestions //
//////////////////////////////
export default function QuizQuestions({ quizId }) {
  //from context
  const { sendQuiz, userProfile, userAvatar } = useAuth();
  const { handleModal } = useModal();
  const {
    score,
    points,
    quiz,
    quizInfo,
    getQuestion,
    getAnswer,
    handlerAnswer,
    showScore,
    answers,
  } = useQuiz();
  const question = getQuestion();
  const answer = getAnswer();

  //state
  const [isAnswer, setIsAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const [countStep, setCountStep] = useState(0);

  //current avatar
  const avatar = userAvatar? userAvatar : userProfile.defaultAvatar

  //show report if end of quiz
  useEffect(() => {
    // isReport && showReport();
    isReport && sendQuiz(score, points, quizId, answers);
  }, [isReport]);

  //selected answer
  const setAnswer = (id, isCorrect) => {
    setIsAnswer(id + 1);
    setIsCorrect(isCorrect);
  };

  //send current answer
  const sendAnswer = () => {
    setCountStep((prevCount) => prevCount + 1);
    if (countStep + 1 === quiz.length) {
      setIsReport(true);
    }
    handlerAnswer(isCorrect, isAnswer);
    setIsAnswer(false);
    setIsCorrect(false);
  };

  //show report of current quiz
  const showReport = () => {
    handleModal(
      <QuizReportList
        userProfile={userProfile}
        avatar={avatar}
        answers={answers}
        quizInfo={quizInfo}
        quiz={quiz}
        score={score}
        points={points}
        data={new Date().toDateString()}
      />
    );
  };

  return (
    <div>
      {showScore ? (
        <ScoreSection 
          score={score} 
          points={points}
          showReport={showReport} />
      ) : (
        <>
            {(typeof question === 'object')? 
                                    <QuestionWithCode question={question}/>
                                    : <HeadingSecondary>{question}</HeadingSecondary>}
          <Answers 
            answer={answer} 
            setAnswer={setAnswer} 
            isAnswer={isAnswer} />
          <NextButton 
            isAnswer={isAnswer} 
            sendAnswer={sendAnswer}/>
        </>
      )}
    </div>
  );
}
