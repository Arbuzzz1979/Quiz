import React from "react";
//IMPORT ELEMENTS
import { Text, InsertImg } from "../elements.sc";

//////////////////////////////
// Component: TextWithImage //
//////////////////////////////
export default function TextWithImage({ text, img }) {
  return (
    <>
      <Text>{text}</Text>
      <InsertImg>
        <img src={`../../images/article/${img}`} alt={img} />
      </InsertImg>
    </>
  );
}
