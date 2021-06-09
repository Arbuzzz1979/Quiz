import React, {useState} from 'react'
//IMPORT ELEMENTS
import * as S from "./PagePanelElements.sc";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//IMPORT COMPONENTS
import PageSideBar from "./PageSideBar"

export default function Panel() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Panel>
      <S.OpenIcon>
        <FontAwesomeIcon icon={faBars} onClick={toggle}/>
      </S.OpenIcon>
      <PageSideBar isOpen={isOpen} toggle={toggle} />
    </S.Panel>
  )
}
