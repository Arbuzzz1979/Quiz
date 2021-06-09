import React from "react";
//CONTEXT
import { useArticles } from "../../../contexts/ArticlesContext";
//COMPONENTS
import ArticleItem from "./ArticleItem";
//IMPORT ELEMENTS
import * as S from "./elements.sc";

////////////////////////
// Component: Article //
////////////////////////
export default function Article() {
  //data
  const { articles } = useArticles();

  return (
    <>
    <S.Heading>“Tips & Tricks and Best Practices!”</S.Heading>
    <S.ArticleItems>
      {articles.map((article, idx) => {
        return (
          <ArticleItem
            title={articles[idx].title}
            key={articles[idx].id}
            img={`../images/${articles[idx].img_url}`}
            url={articles[idx].id}
            description={articles[idx].description}
            desc_img={articles[idx].desc_img}
            className={`masonry${idx}`}
          />
        );
      })}
    </S.ArticleItems>
    </>
  );
}
