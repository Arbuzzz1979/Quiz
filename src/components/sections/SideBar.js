import React, {useState} from 'react'
//IMPORT ELEMENTS
import * as S from "./SideBarElements.sc";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//COMPONENTS
import Menu from "../navigation/Menu";
import User from "./User"
//CONTEXT
import {useAuth} from '../../contexts/AuthContext'

export default function SideBar({ isOpen, toggle }) {
  const {currentUser} = useAuth()

  return (
    <S.Sidebar isOpen={isOpen} onClick={toggle} >
      <S.CloseIcon>
        <FontAwesomeIcon icon={faTimes} onClick={toggle}/>
      </S.CloseIcon>
      {currentUser? <User home={true}/>:null}
      <Menu/> 
    </S.Sidebar>
  )
}
