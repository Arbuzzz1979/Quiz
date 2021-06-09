import React, {useState} from 'react'
//IMPORT ELEMENTS
import * as S from "./PanelElements.sc";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//IMPORT COMPONENTS
import SideBar from "./SideBar"

export default function PagePanel() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Panel>
      <S.OpenIcon>
        <FontAwesomeIcon icon={faBars} onClick={toggle}/>
      </S.OpenIcon>
      <SideBar isOpen={isOpen} toggle={toggle} fixed={true}/>
    </S.Panel>
  )
}
