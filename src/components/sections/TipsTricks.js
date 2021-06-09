import React from "react";
//IMPORT ELEMENTS
import * as S from "./TipsTricksElements.sc";
//LINK
import { Link } from "react-router-dom";

//IMPORT IMAGES
import img1 from "../../assets/images/tips-tricks-wood.jpg";
import img2 from "../../assets/images/tips-4905013_640.jpg";
import img3 from "../../assets/images/Best-Practices.jpg";

//// Section: TipsTricks ////
export default function TipsTricks() {
  return (
    <S.Section>
      <S.Content>
        <h4>Articles</h4>
        <h2>&ldquo;Tips & Tricks and Best Practices!&rdquo;</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <Link to={`articles`}>
          <S.Button>Read more...</S.Button>
        </Link>
      </S.Content>
      <S.Pictures>
        <S.Image1>
          <img src={img3} alt=""/>
        </S.Image1>
        <S.Image2>
        <img src={img2} alt=""/>
        </S.Image2>
      </S.Pictures>
    </S.Section>
  );
}
