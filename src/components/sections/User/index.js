import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//CONTEXT
import { useAuth } from "../../../contexts/AuthContext";
//IMPORT ELEMENTS
import * as S from "./elements.sc";

export default function User({home}) {
  const { userProfile, currentUser, userAvatar } = useAuth();
  
  //current avatar
  const avatar = userAvatar ? userAvatar : userProfile.defaultAvatar;

  const isHTMLPassed = userProfile.html_quiz_BestScoreDate;
  const isCSSPassed = userProfile.css_quiz_BestScoreDate;
  const isJSPassed = userProfile.js_quiz_BestScoreDate;

  return (
    <S.User>
      {home&&
        <Link to="/profile">
          <S.Image src={avatar} />
          <S.Name>{userProfile.displayName}</S.Name>
        </Link>
      }
      <S.Score>You best score</S.Score>
      <Table size="sm">
        <tbody>
          <tr>
            <td align={"right"}>
              HTML QUIZ:
              <br />
              <i>{userProfile.html_quiz_BestScoreDate}</i>
            </td>
            <td>
              {isHTMLPassed ? (
                <span>{userProfile.html_quiz_BestScore}</span>
              ) : (
                `no result`
              )} <br /><br />
            </td>
          </tr>
          <tr>
            <td align={"right"}>
              CSS QUIZ:
              <br />
              <i> {userProfile.css_quiz_BestScoreDate}</i>
            </td>
            <td>
              {isCSSPassed ? (
                <span>{userProfile.css_quiz_BestScore}</span>
              ) : (
                `no result`
              )}<br /><br />
            </td>
          </tr>
          <tr>
            <td align={"right"}>
              JS QUIZ:
              <br />
              <i>{userProfile.js_quiz_BestScoreDate}</i>
            </td>
            <td>
              {isJSPassed ? (
                <span>{userProfile.js_quiz_BestScore}</span>
              ) : (
                `no result`
              )}<br /><br />
            </td>
          </tr>
        </tbody>
      </Table>
      <Link to="/history">View all quiz history</Link>
    </S.User>
  );
}
