import React from "react";
//IMPORT ELEMENTS
import * as S from "./HeaderElements.sc";
import NavBar from "../navigation/Navbar"

///////////////////////
// Component: Header //
///////////////////////
export default function Header() {
  return (
    <S.Header>
      <NavBar/>
    </S.Header>
  );
}
