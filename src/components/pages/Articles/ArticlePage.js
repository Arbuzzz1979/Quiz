import React from "react";
import { useLocation } from "react-router-dom";
//CONTEXT
import { useArticles } from "../../../contexts/ArticlesContext";
//COMPONENTS
import MultiPage from "./Page/MultiPage";
import SinglePage from "./Page/SinglePage";

//IMPORT ELEMENTS
import * as S from "./elements.sc";

////////////////////////////
// Component: ArticlePage //
////////////////////////////
export default function ArticlePage() {
  const { getCurrentArticle } = useArticles(); //data from context
  const location = useLocation(); //location
  const articleId = location.pathname.split("/")[2]; //article Id

  //current data
  const currentArticle = getCurrentArticle(articleId);

  return (
    <S.Container>
      <S.Heading>Articles</S.Heading>
      {currentArticle && (
        <>
          <S.Title>{currentArticle.title}</S.Title>
          {currentArticle.multi_page ? (
            <MultiPage article={currentArticle.articles} />
          ) : (
            <SinglePage currentArticle={currentArticle} />
          )}
        </>
      )}
    </S.Container>
  );
}
