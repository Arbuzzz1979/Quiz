import React from "react";
//IMPORT ELEMENTS
import { LinksContainer, LinkItem, LinkImage, LinkText } from "./elements.sc";

//////////////////////
// Component: Links //
//////////////////////
export default function Links({ res }) {
  return (
    <LinksContainer>
      {res.map((res) => {
        return (
          <LinkItem key={res.id}>
            <LinkImage src={`../images/logos/${res.img_url}`} alt="" />
            <LinkText>
              <a href={res.url} target="_blank" rel="noreferrer">{res.site_title}</a>
              <p>{res.description}</p>
            </LinkText>
          </LinkItem>
        );
      })}
    </LinksContainer>
  );
}
