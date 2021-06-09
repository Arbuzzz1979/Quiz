//Styled
import styled, { keyframes } from "styled-components";
import { device } from '../../../assets/constants/breakpoints'
import {WhiteButton} from "../../../styles/ButtonStyle"
//ANIMATION
import { animated } from "react-spring";
//IMAGES
import htmlBG from "../../../assets/images/html_background.jpg";
import cssBG from "../../../assets/images/css_background.jpg";
import jsBG from "../../../assets/images/js_background.jpg";

export const Container = styled.div`
  grid-column: center-start / center-end;
  flex:1;
`
export const QuizList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  justify-content: space-between;

  @media ${device.bp_large_2},
    only screen and (hover: none) {
      /* display: block; */
      flex-direction: column;
      align-items: center;

      /* box-shadow: 0 1.5rem 4rem rgba($color-black, .15); */
  }
 
`;

export const HeadingPrimary = styled.h1`
  font-size: 2.6rem;
  text-align:center;
  margin-bottom:3.5rem;
  color: var(--color-primary-dark);
  text-transform: uppercase;
  /* display: inline-block; */
  background-image: linear-gradient(to right, var(--color-primary-light), var(--color-primary-dark));
  -webkit-background-clip: text;
  color:transparent; 
  letter-spacing: 2px;
`;



export const Button = styled(WhiteButton)`
  margin:6rem 0;
  width: 12rem;
  @media ${device.bp_large_2},
    only screen and (hover: none) {
      margin:2rem 0;
    }  
`

export const Card = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  flex: 1;
  perspective: 180rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 40rem;
  &:hover .side_front {
    transform: rotateY(-180deg);
  }
  &:hover .side_back_css_quiz,
  &:hover .side_back_html_quiz,
  &:hover .side_back_js_quiz {
    transform: rotateY(0);

  }
  
  @media ${device.bp_large_2},
    only screen and (hover: none) {
      width: 40rem;
      /* display: flex; */
      height: auto;
      border-radius: 0px;
      &:hover .side_front {
        transform: rotateY(0);
      }
      &:hover .side_back_css_quiz,
  &:hover .side_back_html_quiz,
  &:hover .side_back_js_quiz {

    transform: translateY(-30px);
  }      
  }

  @media ${device.bp_small_2},
    only screen and (hover: none) {
      width: 30rem;
  }
`;


export const Side = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  height: 40rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  /* box-shadow: 0 1.5rem 4rem var(--color-black); */

  &.side_front {
    background-color: var(--color-white);
  }
  &.side_back_html_quiz {
    transform: rotateY(180deg);
    background: linear-gradient(
      to right bottom,
      var(--color-secondary-light),
      var(--color-secondary-dark)
    );
  }
  &.side_back_css_quiz {
    transform: rotateY(180deg);
    background: linear-gradient(
      to right bottom,
      var(--color-tertiary-light),
      var(--color-tertiary-dark)
    );
  }
  &.side_back_js_quiz {
    transform: rotateY(180deg);
    background: linear-gradient(
      to right bottom,
      var(--color-primary-light),
      var(--color-primary-dark)
    );
  }

  @media ${device.bp_large_2},
    only screen and (hover: none) {
      position: relative;
      height: 38rem;
      &.side_back_html_quiz, &.side_back_css_quiz, &.side_back_js_quiz  {
        height: 18rem;
        transform: rotateY(0);
        transform: translateY(-30px);
        -webkit-clip-path: polygon(0 0%, 10% 5%, 90% 5%, 100% 10%, 100% 100%, 0 100%);
  clip-path: polygon(0 0%, 10% 5%, 90% 5%, 100% 10%, 100% 100%, 0 100%);
      }
  }    
`;



export const Picture = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  background-size: cover;
  background-position: center;
  height: 18rem;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  @media ${device.bp_large_2},
    only screen and (hover: none) {
      height: 20rem;
    }

  &.html_quiz_picture {
    background-image: linear-gradient(to right bottom, #f0a787, #e54d26),
      url(${htmlBG});
  }
  &.css_quiz_picture {
    background-image: linear-gradient(to right bottom, #37b7f3, #026db5),
    url(${cssBG});
  }

  &.js_quiz_picture {
    background-image: linear-gradient(to right bottom, #4e625d, #343a40),
    url(${jsBG});
  }
`;

export const Heading = styled.h4.attrs((/* props */) => ({ tabIndex: 0 }))`
  font-size: 2rem;
  display: block;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-white);
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  text-align: center;
  width: 100%;

  @media ${device.bp_large_2},
    only screen and (hover: none) {
      top:0;
  }

  span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;

    &.html_quiz_caption {
      display: block;
      /* border-bottom: 2px solid #fff; */
      background: linear-gradient(
        to right bottom,
        var(--color-secondary-light),
        var(--color-secondary-dark)
      );
    }
    &.css_quiz_caption {
      display: block;
      background: linear-gradient(
        to right bottom,
        var(--color-tertiary-light),
        var(--color-tertiary-dark)
      );
    }
    &.js_quiz_caption {
      display: block;
      background: linear-gradient(
        to right bottom,
        var(--color-primary-light),
        var(--color-primary-dark)
      );
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;

  p {
    font-size: 1.4rem;
    text-align: center;
    color: var(--color-white);
    margin-bottom: 2rem;
  }
  h1,
  h3 {
    text-align: center;
    color: var(--color-white);
    margin:6rem 0;
  }
  h1 {
    text-transform: uppercase;
  }
  h4, h5 {
    text-align: center;
    color: var(--color-white);
  }

  @media ${device.bp_large_2},
    only screen and (hover: none) {
      
      h3,.no-visible {
        display: none;
        margin: 0;
      }
      h4 {
       /* margin:4rem 0; */
  }
    }
`;

export const Details = styled.div`
  padding: 1rem 0 2rem 0;

  ul {
    list-style: none;
    width: 100%;
    margin: 0 auto;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: solid 1px var(--color-grey-light-2);
      }
    }
  }
`;



export const Title=styled.h4`
background: var(--color-primary-light);
text-align:center;
margin: 0 0 3rem 0;

@media ${device.bp_large} {
  margin: 3rem 0;
  }
`

export const Description = styled.div`
font-size: 1.8rem;
margin-bottom: 3rem;
span {
  font-size: 2.2rem;
  color: var(--color-primary-light);
}

`



