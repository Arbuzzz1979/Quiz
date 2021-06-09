import React, { useState, useEffect } from "react";
//CONTEXT
import { useResources } from "../../../contexts/ResourcesContext";
//COMPONENTS
import Tabs from "./Tabs";
import Links from "./Links";

//IMPORT ELEMENTS
import * as S from "./elements.sc";

//////////////////////////
// Component: Resources // 
//////////////////////////
export default function Resources() {
  //from context
  const { resources, getCurrentRes, currentRes } = useResources();
  //state
  const [isActiveItem, setIsActiveItem] = useState("tools_res");

  useEffect(() => {
    getCurrentRes(isActiveItem);
  }, [isActiveItem]);

  return (
    <S.Section>
      <S.Heading>Helpful resources and tools</S.Heading>
      <Tabs
        isActiveItem={isActiveItem}
        setIsActiveItem={setIsActiveItem}
      />
      {currentRes && (
        <>
          <S.Title>{currentRes.title}</S.Title>
          <Links res={currentRes.res} />
        </>
      )}
    </S.Section>
  );
}
