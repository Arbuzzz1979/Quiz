import React from 'react'
//COMPONENTS
import TextWithCode from "./TextWithCode";
import TextWithImage from "./TextWithImage";
//IMPORT ELEMENTS
import { Text, SubHeading, GoLink } from "../elements.sc";

///////////////////////////////
// Component: InsertLikeHtml //
///////////////////////////////
export default function InsertLikeHtml({text, insert, insertType}) {
  if (insertType==="code") return <TextWithCode text={text} code={insert}/>
  if (insertType==="img") return <TextWithImage text={text} img={insert}/>
  if (insertType==="paragraph") return <Text><p>{text}</p></Text>
  if (insertType==="link") return <GoLink variant="outline-secondary" href={insert}><p>{text}</p></GoLink>
  if (insertType==="title") return <SubHeading>{text}</SubHeading>
  return <Text>{text}</Text>
}
