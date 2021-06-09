import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//CONTEXT
import { useQuiz } from "../../../../contexts/QuizContext";
//IMPORT ELEMENTS
import { Container, HeadingPrimary } from "./elements.sc";
//COMPONENTS
import ProgressLine from "./ProgressBar/ProgressLIne";
import QuizQuestions from "./Questions/QuizQuestions";
//CONSTANTS
import { quizTitle } from "../../../../assets/constants/title"

/////////////////////
// Component: Quiz //
/////////////////////
export default function Quiz() { 
  //from context
  const { initQuiz, quiz } = useQuiz();
  //location
  const location = useLocation();
  const quizId = location.pathname.split("/")[2];

  //init current quiz
  useEffect(() => {
    initQuiz(quizId);
  }, []);

  return (
    <Container>
      {quiz && (
        <>
          <HeadingPrimary>{quizTitle(quizId)}</HeadingPrimary>
          <ProgressLine />
          <QuizQuestions quizId={quizId} />
        </>
      )}
    </Container>
  );
}
