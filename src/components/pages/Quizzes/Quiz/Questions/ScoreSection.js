import React from "react";
//BOOTSTRAP
import { Button } from "react-bootstrap";
//CONSTANTS
import { quizPassingMessage } from "../../../../../assets/constants/messages";
//COMPONENTS
import Statistics from "../Report/Statistics";
//CONTEXT
import { useQuiz } from "../../../../../contexts/QuizContext";
//IMPORT ELEMENTS
import { Summary, Current, History } from "../elements.sc";

/////////////////////////////
// Component: ScoreSection //
/////////////////////////////
export default function ScoreSection({ score,points, showReport }) {

  const { numberQuestions } = useQuiz();
  
  return (
    <div className="score-section">
      <Summary>
        <Current>
          <h4>
            You scored {points}
            <p>
              <span>{score} questions </span> answered correctly.
            </p>
          </h4>
          <h3>{quizPassingMessage[`${numberQuestions}`][`${score}`]}</h3>

          <Button variant="outline-secondary" onClick={showReport}>
            View Details
          </Button>
        </Current>
        <History>
          <h3>Your Quiz History</h3>
          <Statistics show={10} />
        </History>
      </Summary>
    </div>
  );
}
