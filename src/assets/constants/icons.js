import React from 'react'
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faPalette,
  faFont,
  faImages,
  faIcons,
  faFillDrip,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";

export default function IconRes({icon}) {
  if (icon==="faTools") return <FontAwesomeIcon icon={faTools} />
  if (icon==="faHtml5") return <FontAwesomeIcon icon={faHtml5} />
  if (icon==="faCss3Alt") return <FontAwesomeIcon icon={faCss3Alt} />
  if (icon==="faJs") return <FontAwesomeIcon icon={faJs} />
  if (icon==="faPalette") return <FontAwesomeIcon icon={faPalette} />
  if (icon==="faFont") return <FontAwesomeIcon icon={faFont} />
  if (icon==="faImages") return <FontAwesomeIcon icon={faImages} />
  if (icon==="faIcons") return <FontAwesomeIcon icon={faIcons} />
  if (icon==="faFillDrip") return <FontAwesomeIcon icon={faFillDrip} />
  if (icon==="faBlog") return <FontAwesomeIcon icon={faBlog} />
  return null
}
