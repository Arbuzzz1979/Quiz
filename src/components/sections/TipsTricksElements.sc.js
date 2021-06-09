//Styled
import styled from "styled-components";
import { PrimaryButton } from "../../styles/ButtonStyle";
import { device } from "../../assets/constants/breakpoints";
import { Link } from "react-router-dom";
import quiz_logo from "../../assets/images/quiz_logo_640.png";
import notebook from "../../assets/images/notebook-2637726_640.jpg";

export const Section = styled.section`
  grid-column: full-start / full-end;
  background-color: var(--color-secondary-light-2);

  display: grid;
  grid-template-columns:
    [blog-start] minmax(6rem, 1fr) repeat(2, [col-start] minmax(min-content, 56rem) [col-end]) minmax(6rem, 1fr) [blog-end];
  
  @media ${device.bp_med_2} {
    grid-template-rows: repeat(2, min-content);
    grid-template-columns: 1fr;    
    padding: 6rem;
  }    
`;

export const Content = styled.div`
  grid-column: blog-start / col-end 1;
  grid-row: 1 / span 1;

  padding: 6rem 8vw;
  display: grid;
  align-content: center;
  justify-items: start;

  h2 {
    /* font-style: italic; */
  }
  h4 {
    background: var(--color-primary-light);
    font-family: var(--font-subtitle);
  }
  @media ${device.bp_med_2} {
    grid-row: 1 / span 1;
    padding: 0rem 8vw 6rem 8vw;
  }
`;


export const Pictures = styled.div`
  background-blend-mode: screen;
  background-image: linear-gradient(to right bottom, #4e625d, #343a40),
    url(${notebook});
  background-size: cover;
  grid-column: col-start 2 / blog-end;
  grid-row: 1 / span 1;

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  align-items: center;

  @media ${device.bp_med_2} {
    padding: 6rem;
    grid-row: 2 / span 1;
  }

`;

export const Image1 = styled.div`
  grid-row: 2 / 6;
  grid-column: 2 / 6;
  box-shadow: 0 2rem 5rem rgba(#000, 0.1);
  img {
    width: 100%;
  }
`;

export const Image2 = styled.div`
  grid-row: 4 / 6;
  grid-column: 1 / 4;
  z-index: 20;
  box-shadow: 0 2rem 5rem rgba(#000, 0.2);
  img {
    width: 115%;
    transform: translateX(-15%);
  }
`;

export const Button = styled(PrimaryButton)`
  /*  */
  justify-self: center;
  margin-top:1.5rem;
`;
