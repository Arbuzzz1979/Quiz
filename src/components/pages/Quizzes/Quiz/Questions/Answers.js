import React from "react";
//BOOTSTRAP
import { Button } from "react-bootstrap";
//IMPORT ELEMENTS
import { Answer } from "../elements.sc";

////////////////////////
// Component: Answers //
////////////////////////
export default function Answers({ answer, setAnswer, isAnswer }) {
  return (
    <Answer>
      {answer.map((item, idx) => (
        <Button
          variant="outline-secondary"
          onClick={() => setAnswer(idx, item.isCorrect)}
          className={
            isAnswer - 1 === idx ? `active letter${idx}` : `letter${idx}`
          }
        >
          {item.answerText}
        </Button>
      ))}
    </Answer>
  );
}
