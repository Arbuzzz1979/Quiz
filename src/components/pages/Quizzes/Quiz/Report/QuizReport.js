import React from "react";
//BOOTSTRAP
import { Form, Card } from "react-bootstrap";
//COMPONENTS
import ReportWithCode from "./ReportWithCode"
//IMPORT ELEMENTS
import { CardHeading, Report, Item } from "../elements.sc";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
//GENERATE ID
import { v4 as uuidv4 } from "uuid";

///////////////////////////
// Component: QuizReport //
///////////////////////////
export default function QuizReport({ answer, question, answerOptions, idx }) {

  return (
    <Report>
      <Card>
        <Card.Body>

        {(typeof question === 'object')? 
                                    <ReportWithCode question={question} idx={idx}/>
                                    : <CardHeading>{idx + 1}.{question}</CardHeading>}
          

          <Form>
            {answerOptions.map((option, idx) => {
              const check = answer.isAnswer === idx + 1;
              const correct = option.isCorrect && answer.isCorrect;

              const checkIcon = check ? (
                <FontAwesomeIcon icon={correct ? faCheck : faTimes} />
              ) : !correct && option.isCorrect ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : null;

              return (
                <Item key={uuidv4()}>
                  <Form.Check
                    disabled
                    type="radio"
                    checked={check ? "cheked" : ""}
                    label={`  ${option.answerText}`}
                    id={`disabled-radio${idx}`}
                    className={`letter${idx}`}
                  />
                  {checkIcon}
                </Item>
              );
            })}
          </Form>
        </Card.Body>
      </Card>
    </Report>
  );
}
