import React from "react";
//IMPORT ELEMENTS
import { Text, Code } from "../elements.sc";
//SYNTAX HIGHLIGHTER
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

/////////////////////////////
// Component: TextWithCode //
/////////////////////////////
export default function TextWithCode({ text, code }) {
  return (
    <>
      <Text>{text}</Text>
      {code && ( 
        <Code>
          <SyntaxHighlighter
            language="javascript"
            style={dark}
            wrapLongLines={true}
            customStyle={{ padding: "2rem" }}
          >
            {code}
          </SyntaxHighlighter>
        </Code>
      )}
    </>
  );
}

