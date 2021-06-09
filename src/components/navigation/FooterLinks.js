import React from "react";
import { NavLink } from "react-router-dom";
//IMPORT ELEMENTS
import * as S from "./FooterLinksElements.sc";

//CONTEXT
import {useAuth} from '../../contexts/AuthContext'

/////////////////////
// Component: Menu //
/////////////////////
export default function FooterLinks() {
  return (
    <S.Links>
      <S.Item>
        <NavLink exact to={`/quiz`}>
          Quiz
        </NavLink>
      </S.Item>
      <S.Item>
        <NavLink to={`/articles`}>
          Articles
        </NavLink>
      </S.Item>
      <S.Item>
        <NavLink to={`/resources`}>
          Resources
        </NavLink>
      </S.Item>
    </S.Links>
  );
}
