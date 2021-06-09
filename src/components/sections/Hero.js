import React from "react";

//IMPORT ELEMENTS
import * as S from "./HeroElements.sc";
//LINK
import { Link } from "react-router-dom";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";

//// Section: Hero ////
export default function Hero() {
  return (
    <S.Hero>
      <S.Logo />
      <S.Slogan>Test your HTML, CSS and JS skills</S.Slogan>
      <S.Icons>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faJs} />        
      </S.Icons>      
      <Link to={`quiz`}>
        <S.Button>Take quiz now</S.Button>
      </Link>

    </S.Hero>
  );
}
