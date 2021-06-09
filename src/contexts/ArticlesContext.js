import React, { useContext, useState } from "react";
import dataArticles from "../assets/data/articles_data";

const initialArticlesData = dataArticles();
const ArticlesContext = React.createContext();

export function useArticles() {
  return useContext(ArticlesContext);
}

export default function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState(initialArticlesData);


  const getCurrentArticle = (id) => {
    return articles.filter((article) => article.id === id)[0]
  }

  const value = {
    articles,
    getCurrentArticle
  };

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}  