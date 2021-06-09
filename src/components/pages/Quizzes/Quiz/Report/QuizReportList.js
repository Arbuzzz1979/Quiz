import React from "react";
//COMPONENTS
import QuizReport from "./QuizReport";
//IMPORT ELEMENTS
import {
  ReportList,
  Result,
  User,
  Name,
  HeadingReport,
  DetailsReport,
  Score,
  Answers,
} from "../elements.sc";

export default function QuizReportList({
  answers,
  userProfile,
  quizInfo,
  quiz,
  score,
  points,
  avatar,
  data,
}) {
  return (
    <ReportList>
      <HeadingReport>
          <span className={`${quizInfo.id}_caption`}>
            {quizInfo.title} Report
          </span>
      </HeadingReport>

      <Result>
        <User src={avatar}></User>
        <Name>{userProfile.displayName}</Name>
        <Score>
          You scored <p>{points}</p>{" "}
        </Score>
        <DetailsReport>
          <ul>
            <li>{quizInfo.number_of_questions} questions</li>
            <li>Correct answers: {score}</li>
            <li> {data}</li>
          </ul>
        </DetailsReport>
      </Result>
      <Answers>
        {answers.map((answer, idx) => (
          <QuizReport
            idx={idx}
            key={idx}
            answer={answer}
            question={quiz[answer.currentId].questionText}
            answerOptions={quiz[answer.currentId].answerOptions}
          />
        ))}
      </Answers>
    </ReportList>
  );
}
