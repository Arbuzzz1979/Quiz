import React from "react";
//STYLED
import styled from "styled-components";
//IMPORT ELEMENTS
import { CardHeading, ReportTextCode, ReportCode} from "../elements.sc";
//SYNTAX HIGHLIGHTER
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

///////////////////////////////
// Component: ReportWithCode //
///////////////////////////////

export default function ReportWithCode({ question, idx }) {
  console.log("question",question)
  return (
    <>
    <CardHeading>{idx + 1}.{question.title}</CardHeading>
      <ReportTextCode>{question.text}</ReportTextCode>
      {question.code && (
        <ReportCode>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            wrapLongLines={true}
            customStyle={{ padding: "2rem" }}
          >
            {question.code}
          </SyntaxHighlighter>
        </ReportCode>
      )}
    </>
  );
}
