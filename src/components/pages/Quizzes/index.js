import React, { useState, useEffect } from "react";
//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";
import { useQuiz } from "../../../contexts/QuizContext";
import { useAlert } from "../../../contexts/AlertContext";
//REACT ROUTER
import { Link, useHistory } from "react-router-dom";
//COMPONENT
import QuizCard from "./QuizCard.sc";
//BOOTSTRAP
import { Alert } from "react-bootstrap";
//IMPORT ELEMENTS
import { Container, QuizList, Title, Description } from "./elements.sc";
//ANIMATION
import { useSpring, animated } from "react-spring";


//////////////////////////
// Component: Dashboard //
//////////////////////////
export default function Quizzes() {
  //Get list of quiz
  const { quizData } = useQuiz();
  const {setAlertMessage} = useAlert();
  const [error, setError] = useState();
  const { currentUser, userProfile, logout, alert} = useAuth();
  const [showAlert, setShowAlert] = useState()
  const history = useHistory();

    //Animation
    const animation = useSpring({
      config: {
        duration: 250,
      },
      opacity: showAlert ? 1 : 0,
      transform: showAlert ? `translate(-50%,80%)` : `translate(-50%,-100%)`,
    });

  return (
    <Container>
      <Title>Test your HTML, CSS and Js skills</Title>
      <Description>
      <span>&ldquo;Welcome to the Coding Quiz Challenge!&rdquo;</span> <br/>Try to answer the following questions. No time limit. You will get points for each correct answer. <br/>At the end of the Quiz, your total score will be displayed. <br/><br/><span>Question points: </span>
          Basic: 5 points. Intermediate: 10 points. Advanced: 15 points.
      </Description>
      <QuizList>
        {quizData.map((quiz) => (
          <QuizCard 
            quiz={quiz} 
            key={quiz.id} 
            user={currentUser} 
            bestSore= {userProfile[`${quiz.id}_BestScore`]}
          />
        ))}
      </QuizList>
    </Container>
  );
}

