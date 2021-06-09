import React from "react";
import { Table, Button } from "react-bootstrap";
//CONTEXT
import { useAuth } from "../../../../../contexts/AuthContext";
//COMPONENTS
import Statistics from "./Statistics";
//IMPORT ELEMENTS
import {
  HistoryContainer,
  HistoryHeading,
  HistoryTable,
  HistoryBestDetails,
  HistoryBest,
  HistoryUser,
  User, Scroll
} from "../elements.sc";

////////////////////////
// Component: History //
////////////////////////
export default function History({ quizInfo, quiz, score, points, data }) {
  const { userProfile, userAvatar } = useAuth();
  //current avatar
  const avatar = userAvatar ? userAvatar : userProfile.defaultAvatar;

  const isHTMLPassed = userProfile.html_quiz_BestScoreDate;
  const isCSSPassed = userProfile.css_quiz_BestScoreDate;
  const isJSPassed = userProfile.js_quiz_BestScoreDate;

  return (
    <HistoryContainer>
      <HistoryHeading>Your all results </HistoryHeading>
      <HistoryBest>
        <HistoryUser>
        <User src={avatar} />
        <p>{userProfile.displayName}</p>
        </HistoryUser>


        <HistoryBestDetails>
          <Table size="sm">
            <thead>
              <tr>
                <th colSpan={3}><h3>You best score</h3></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align={"right"}>HTML&nbsp;QUIZ:</td>
                <td>{isHTMLPassed ? <span>{userProfile.html_quiz_BestScore}</span> : `no result`}</td>
                <td><i>{userProfile.html_quiz_BestScoreDate}</i></td>
              </tr>
              <tr>
                <td align={"right"}>CSS&nbsp;QUIZ:</td>
                <td>{isCSSPassed ? <span>{userProfile.css_quiz_BestScore}</span> : `no result`}</td>
                <td><i>{userProfile.css_quiz_BestScoreDate}</i></td>
              </tr>
              <tr>
                <td align={"right"}>JS&nbsp;QUIZ:</td>
                <td>{isJSPassed ? <span>{userProfile.js_quiz_BestScore}</span> : `no result`}</td>
                <td><i>{userProfile.js_quiz_BestScoreDate}</i></td>
              </tr>
            </tbody>
          </Table>
        </HistoryBestDetails>
      </HistoryBest>
      <HistoryTable>
        <h3>Your Quiz History</h3>
        <Scroll>
          <Statistics show={99} />
        </Scroll>
      </HistoryTable>
    </HistoryContainer>
  );
}




