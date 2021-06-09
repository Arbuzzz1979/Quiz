import React from "react";
import { Link } from "react-router-dom";
//IMPORT ELEMENTS
import {
  Button,
  Card,
  Picture,
  Heading,
  Details,
  Side,
  Info,
} from "./elements.sc";

//////////////////////////
// Component: QuizCard //
//////////////////////////
export default function QuizCard({ quiz, user, bestSore }) {
  return (
    <Card>
      <Side className="side_front">
        <Picture className={`${quiz.id}_picture`}>&nbsp;</Picture>
        <Heading>
          <span className={`${quiz.id}_caption`}>{quiz.title}</span>
        </Heading>
        <Details>
          <ul>
            <li>{quiz.number_of_questions} questions </li>
            <li>difficulty: {quiz.difficulty}</li>
            <li> Your best score: {bestSore} </li>
          </ul>
        </Details>
      </Side>
      <Side className={`side_back_${quiz.id}`}>
        <Info>
          <h3>{quiz.title}</h3>
          {/* <p className="no-visible">{quiz.description}</p>
          <h5>QUESTION POINTS</h5>
          <p>{quiz.points}</p> */}
          {user ? (
            <>
              <h4>Start the Quiz. <br/>Good luck!</h4>
              <Button className="btn-white" as={Link} to={`quiz/${quiz.id}`}>
                GO
              </Button>
            </>
          ) : (
            <>
              <h4>Please login to start the Quiz. </h4>
              <Button className="btn-white" as={Link} to="/login">
                LogIn
              </Button>
            </>
          )}
        </Info>
      </Side>
    </Card>
  );
}
