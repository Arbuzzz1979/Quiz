import React from 'react'

import FooterLinks from "../navigation/FooterLinks"

//IMPORT ELEMENTS
import * as S from "./FooterElements.sc";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebookF, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <S.Footer>
      <FooterLinks/>
      <S.Line>
        <S.Copy>© Copyright 2021</S.Copy>
        <S.Social>
          <FontAwesomeIcon icon={faGithub}/>
          <FontAwesomeIcon icon={faFacebookF}/>
          <FontAwesomeIcon icon={faLinkedin}/>
          <FontAwesomeIcon icon={faTelegram}/>
        </S.Social>
      </S.Line>
    </S.Footer>
  )
}
