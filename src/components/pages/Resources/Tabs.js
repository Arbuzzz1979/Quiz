import React, { useState, useEffect } from "react";
//CONTEXT
import { useResources } from "../../../contexts/ResourcesContext";
//IMPORT ELEMENTS
import { TabsContainer } from "./elements.sc";
//BOOTSTRAP
import { Button } from "react-bootstrap";
//COMPONENTS
import Icons from "./Icons";

/////////////////////
// Component: Tabs //
/////////////////////
export default function Tabs({ isActiveItem, setIsActiveItem }) {
  //from context
  const { resData } = useResources();

  useEffect(() => {
    console.log("isActiveItem", isActiveItem);
  });

  return (
    <TabsContainer>
      {resData.map((res) => {
        return (
          <Button
            variant="outline-secondary"
            size="lg"
            key={res.id}
            onClick={() => setIsActiveItem(res.id)}
            className={isActiveItem === res.id ? "active" : null}
          >
            <Icons icon={res.icon} />
            {res.name}
          </Button>
        );
      })}
    </TabsContainer>
  );
}
