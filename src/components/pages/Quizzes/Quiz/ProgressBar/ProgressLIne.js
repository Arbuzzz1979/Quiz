import React, { useState, useRef } from "react";
//CONTEXT
import { useQuiz } from "../../../../../contexts/QuizContext";
//COMPONENT
import Step from "./Step";
//STYLED COMPONENT
import "./ProgressLine.css";

/////////////////////////////
// Component: ProgressLine //
/////////////////////////////
const ProgressLine = () => {
  //from context
  const { quiz, currentAnswer } = useQuiz();
  const numberOfQuestion = quiz.length;

  const isMax = function (number) {
    if (number>numberOfQuestion) return numberOfQuestion
    return number
  }
  
  const currentQuestion = isMax((currentAnswer.length===0)? 1 : currentAnswer.length+1)
  
  return (
  <>
    <div className="SM_step">
      <h3>Question {currentQuestion} of {numberOfQuestion}</h3>
    </div>
    <div className="TL_div">
      <ul className="UL_style">
        {quiz.map((step) => {
          return (
            <Step
              completed={step.completed}
              active={step.active}
              key={step.id}
              id={step.currentId}
              isCorrect={currentAnswer[step.currentId]}
            />
          );
        })}
      </ul>
    </div>
    </>
  );
};

export default ProgressLine;
