import React from "react";

//IMPORT ELEMENTS
import { Masonry, Item, Title, Img, Description } from "./elements.sc";

////////////////////////////
// Component: ArticleItem //
////////////////////////////
export default function ArticleItem({
  title,
  url,
  description,
  className,
  desc_img,
}) {

  const descriptionHtml = description && description.split("&#");

  return (
    <Masonry className={className}>
      <Item to={`articles/${url}`}>
        <Title>{title}</Title>
        <Img>
          {desc_img && <img src={`../../images/article/${desc_img}`} alt={desc_img}/>}
        </Img>
        <Description>
          {descriptionHtml &&
            descriptionHtml.map((paragraph) => <p>{paragraph}</p>)}
        </Description>
      </Item>
    </Masonry>
  );
}
