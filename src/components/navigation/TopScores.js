import React from 'react'
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
//IMPORT ELEMENTS
import * as S from "./TopScoresElements.sc";

export default function TopScores({ toggle }) {
  return (
    <>
      <S.Link onClick={toggle}>
        Top Scores
        <FontAwesomeIcon icon={faTrophy} />
      </S.Link>
    </>
  )
}


