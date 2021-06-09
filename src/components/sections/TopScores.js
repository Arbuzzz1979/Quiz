import React from "react";
//IMPORT ELEMENTS
import * as S from "./TopScoresElements.sc";

import Scores from "./Scores/Scores"

export default function TopScores() {
  return (
    <S.TopScores>
      <S.Title>Top&nbsp;Scores</S.Title>
      <Scores/>
    </S.TopScores>
  );
}
