import React from "react";
//BOOTSTRAP
import { Button } from "react-bootstrap";
//IMPORT ELEMENTS
import { NextQuestion } from "../elements.sc";

///////////////////////////
// Component: NextButton //
///////////////////////////
export default function NextButton({isAnswer, sendAnswer }) {
  return (
    <NextQuestion>
      <Button
        variant="outline-secondary"
        disabled={!isAnswer}
        className={isAnswer ? "next" : null}
        onClick={sendAnswer}
      >
        Next Question
      </Button>
    </NextQuestion>
  );
}
