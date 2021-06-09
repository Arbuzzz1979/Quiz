import React from "react";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

/////////////////////
// Component: Step //
/////////////////////
export default function Step({ id, completed, active, isCorrect }) {
  
  const progress = active
    ? completed && active
      ? "LI_default LI_green"
      : "LI_default LI_blue"
    : "LI_default";

  const number = completed ? (
    <FontAwesomeIcon icon={isCorrect ? faCheck : faTimes} />
  ) : (
    id + 1
  );

  return (
    <li className={progress}>
      <span>{number}</span>
    </li>
  );
}
