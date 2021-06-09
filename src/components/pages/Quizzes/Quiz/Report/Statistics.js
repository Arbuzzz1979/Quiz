import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//COMPONENTS
import QuizReportList from "./QuizReportList";
//CONTEXT
import { useAuth } from "../../../../../contexts/AuthContext";
import { useModal } from "../../../../../contexts/ModalContext";
import { useQuiz } from "../../../../../contexts/QuizContext";
//CONSTANTS
import { quizTitle } from "../../../../../constants/title";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
//GENERATE ID
import { v4 as uuidv4 } from "uuid";

///////////////////////////
// Component: Statistics //
///////////////////////////
export default function Statistics({ show }) {
  const { userProfile, userAvatar, quizHistory } = useAuth();
  const { handleModal } = useModal();
  const { getQuizInfo, quiz } = useQuiz();

  //current avatar
  const avatar = userAvatar ? userAvatar : userProfile.defaultAvatar;

  const showDetails = (record) => {
    let a = getQuizInfo(record.quizId).questions;
    let b = record.answers;

    let sortQuiz = b.flatMap((v) => {
      return a.filter((v2) => {
        return v.id === v2.id;
      });
    });

    handleModal(
      <QuizReportList
        userProfile={userProfile}
        avatar={avatar}
        answers={record.answers}
        quizInfo={getQuizInfo(record.quizId)}
        quiz={sortQuiz}
        score={record.score}
        points={record.points}
        data={record.createdAt}
      />
    );
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Data</th>
          <th>Quiz</th>
          <th>Score</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {quizHistory.map((record, idx) => {
          if (idx > show) return null;
          if (idx === show) return (<tr key={uuidv4()}>
          <td colspan="4"><Link to="/history">Show all history</Link></td></tr>);
          return (
            <tr key={uuidv4()}>
              <td>{record.createdAt}</td>
              <td>{quizTitle(record.quizId)}</td>
              <td>{record.points}</td>
              <td align="center">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => showDetails(record)}
                >
                  <FontAwesomeIcon icon={faFileAlt} />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
