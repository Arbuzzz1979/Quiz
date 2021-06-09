import React from "react";
//STYLED
import styled from "styled-components";
//IMPORT ELEMENTS
import { TitleCode, TextCode, Code } from "../elements.sc";
//SYNTAX HIGHLIGHTER
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

/////////////////////////////////
// Component: QuestionWithCode //
/////////////////////////////////

export default function QuestionWithCode({ question }) {
  console.log("question",question)
  return (
    <>
      <TitleCode>{question.title}</TitleCode>
      <TextCode>{question.text}</TextCode>
      {question.code && (
        <Code>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            wrapLongLines={true}
            customStyle={{ padding: "2rem" }}
          >
            {question.code}
          </SyntaxHighlighter>
        </Code>
      )}
    </>
  );
}

