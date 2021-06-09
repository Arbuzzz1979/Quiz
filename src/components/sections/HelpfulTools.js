import React from "react";
//IMPORT ELEMENTS
import * as S from "./HelpfulToolsElements.sc";
import Icons from "../../assets/constants/icons";
//LINK
import { Link } from "react-router-dom";
//CONTEXT
import { useResources } from "../../contexts/ResourcesContext";
//ID GENERATE
import { v4 as uuidv4 } from "uuid";

//// Section: HelpfulTools ////
export default function HelpfulTools() {
  const { resData } = useResources();

  return (
    <S.Section>
      <h4>Resources</h4>
      <h2>Helpful resources and tools for web designers and developers</h2>
      <h3>make your work a lot easier enhancing your capabilities. </h3>
      <S.Container>
        {resData.map((res) => (
          <S.Item key={uuidv4()}>
            <Icons icon={res.icon} />
            {res.name}
          </S.Item>
        ))}
      </S.Container>
      <Link to={`resources`}>
        <S.Button>Go to section</S.Button>
      </Link>
    </S.Section>
  );
}
