import React from 'react'
//IMPORT ELEMENTS
import * as S from "./QuizPreviewElements.sc";
//LINK
import { Link } from "react-router-dom";
//IMPORT IMAGES
import htmlBG from "../../assets/images/html_quiz.jpg";
import cssBG from "../../assets/images/css_quiz.jpg";
import jsBG from "../../assets/images/js_quiz.jpg";

export default function QuizPreview() {
  return (
    <S.Section>
      <S.Composition>
        <S.Image1 src={htmlBG} alt=""/> 
        <S.Image2 src={cssBG} alt=""/>
        <S.Image3 src={jsBG} alt=""/>
      </S.Composition>
      <S.Content>
        <h4>Quiz</h4>
        <h2>&ldquo;Welcome to the Coding Quiz Challenge!&rdquo;</h2>
        <p>
        Try to answer the following questions. No time limit. You will get points for each correct answer. At the end of the Quiz, your total score will be displayed.
        </p>
        <Link to={`quiz`}>
          <S.Button>Let's go!</S.Button>
        </Link>
      </S.Content>
      <S.Background/>
    </S.Section>
  )
}
