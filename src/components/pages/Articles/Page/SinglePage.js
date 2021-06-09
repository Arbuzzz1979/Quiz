import React from "react";
//COMPONENTS
import InsertLikeHtml from "./InsertLikeHtml";
//IMPORT ELEMENTS
import { InfoSP } from "../elements.sc";

///////////////////////////
// Component: SinglePage //
///////////////////////////
export default function SinglePage({ currentArticle }) {
  const { text, source } = currentArticle;

  const htmlInsert =
    text &&
    text.split("&#").reduce(
      (p, c) => {
        if (p[p.length - 1].length === 2) {
          p.push([]);
        }

        p[p.length - 1].push(c);
        return p;
      },
      [[]]
    );

  return (
    <InfoSP>
      {htmlInsert.map((html) => (
        <InsertLikeHtml
          text={html[0]}
          insert={source[html[1]]}
          insertType={html[1].split("_")[0]}
        />
      ))}
    </InfoSP>
  );
}
