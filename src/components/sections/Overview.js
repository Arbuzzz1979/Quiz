import React from "react";
//IMPORT ELEMENTS
import * as S from "./OverviewElements.sc";
import Breadcrumbs from "../navigation/BreadCrumbs";
import Trophy from "./Trophy";

///////////////////////
// Component: Header //
///////////////////////
export default function Overview() {
  return (
    <S.Overview>
      <Breadcrumbs />
      <Trophy />
    </S.Overview>
  );
}
