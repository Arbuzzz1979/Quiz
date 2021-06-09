import React from "react";
import { NavLink } from "react-router-dom";
//IMPORT ELEMENTS
import * as S from "./MenuElements.sc";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
//CONTEXT
import {useAuth} from '../../contexts/AuthContext'

/////////////////////
// Component: Menu //
/////////////////////
export default function Menu() {
  const {currentUser} = useAuth()
  return (
    <S.Menu> 
      <S.Item>
        <NavLink exact to={`/quiz`}>
          Quiz
          <FontAwesomeIcon icon={faQuestionCircle} />
        </NavLink>
      </S.Item>
      <S.Item>
        <NavLink to={`/articles`}>
          Articles
          <FontAwesomeIcon icon={faNewspaper} />
        </NavLink>
      </S.Item>
      <S.Item>
        <NavLink to={`/resources`}>
          Resources
          <FontAwesomeIcon icon={faTools} />
        </NavLink>
      </S.Item>
      {/* {!home&&currentUser? <S.Item>
        <NavLink to={`/history`}>
         Quiz history
          <FontAwesomeIcon icon={faSignal} />
        </NavLink>
      </S.Item>: null} */}
    </S.Menu>
  );
}
