import React, { useState } from "react";
import { useLocation } from "react-router-dom";
//COMPONENTS
import InsertLikeHtml from "./InsertLikeHtml";
//BOOTSTRAP
import { Button } from "react-bootstrap";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//IMPORT ELEMENTS
import { InfoMP, SubHeading, PageNav } from "../elements.sc";

//////////////////////////
// Component: MultiPage //
//////////////////////////
export default function MultiPage({ article }) {
  //state
  const [numberPage, setNumberPage] = useState(0);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(true);

  //next page handler
  function goNextPage() {
    if (numberPage + 1 < article.length) {
      setNumberPage((currentNumber) => currentNumber + 1);
      if (numberPage + 2 === article.length) {
        setNext(true);
      }
      if (numberPage + 1 === 1) {
        setPrev(false);
      }
    }
  }

  //prev page handler
  function goPrevPage() {
    if (numberPage > 0) {
      setNumberPage((currentNumber) => currentNumber - 1);
      if (numberPage - 1 === 0) {
        setPrev(true);
      }
      if (numberPage + 1 === article.length) {
        setNext(false);
      }
    }
  }

  const source = article[numberPage].source;

  const htmlInsert =
    article[numberPage].text &&
    article[numberPage].text.split("&#").reduce(
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
    <>
      <SubHeading>{article[numberPage].title}</SubHeading>

      <InfoMP>
        {htmlInsert.map((html) => (
          <InsertLikeHtml
            text={html[0]}
            insert={source[html[1]]}
            insertType={html[1].split("_")[0]}
          />
        ))}
      </InfoMP>

      <PageNav>
        <Button
          variant="outline-secondary"
          onClick={goPrevPage}
          disabled={prev}
          size="lg"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button
          variant="outline-secondary"
          onClick={goNextPage}
          disabled={next}
          size="lg"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </PageNav>
    </>
  );
}
