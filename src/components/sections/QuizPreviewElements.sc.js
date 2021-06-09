//Styled
import styled from "styled-components";
import { PrimaryButton } from "../../styles/ButtonStyle";
import BG from "../../assets/images/logo.png";
import { device } from "../../assets/constants/breakpoints";
import { Link } from "react-router-dom";

export const Section = styled.section`
  grid-column: full-start / full-end;
  background-color: var(--color-grey-light-1);
  padding: 6rem 0 0 0;
  display: grid;
  grid-template-columns:
    [quiz-start] minmax(6rem, 1fr) repeat(
      2,
      [col-start] minmax(min-content, 56rem) [col-end]
    )
    minmax(6rem, 1fr) [quiz-end];

  
  @media ${device.bp_large} {
    padding: 4rem 0 0 0;
  }      
  @media ${device.bp_med_2} {
    grid-template-rows: repeat(2, min-content);
    grid-template-columns: 1fr;    
    padding: 2rem 0 0 0;
  }    
  
`;

export const Content = styled.div`
  grid-column: col-start 2/ quiz-end;
  grid-row: 1 / span 1;
  z-index: 3;
  padding: 6rem 8vw;
  display: grid;
  align-content: center;
  justify-items: start;

  h2 {
    /* font-style: italic; */
  }
  h4 {
    text-align:center;
    width:100%;
    background: var(--color-primary-light);
    font-family: var(--font-subtitle);
    margin-bottom:4rem;
  }
  @media ${device.bp_med_2} {
    grid-row: 1 / span 1;
    padding: 4rem 8vw 6rem 8vw;
  }     
`;


export const Button = styled(PrimaryButton)`
  /*  */
  justify-self: center;
  margin-top:2.5rem;
`;

export const Composition = styled.div`
  grid-column: quiz-start/ col-end 1;
  grid-row: 1 / span 1;
  z-index: 3;
  position: relative;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  padding: 0 0 8rem 0;

  @media ${device.bp_med_2} {
    grid-row: 2 / span 1;
    grid-template-columns: repeat(9, 1fr);
  }   
    
`

export const Image = styled.img`
      width: 100%;
      box-shadow: var(--shadow-light);
      border-radius: 2px;
      
      /* z-index: 10; */
      transition: all .3s ease-out;
      outline-offset: 1rem;

      &:hover {
          outline: 1rem solid var(--color-primary-light);
          transform: scale(1.05) translateY(-.5rem);
          box-shadow:  var(--shadow-dark);;
          z-index: 20;
      }

  @media ${device.small_2} {
    /* width: 100%;
    height: 100%; */
  }  
        
  @media ${device.bp_med_2} {
    
  }     


`
export const Image1 = styled(Image)`
  grid-row: 1 / 7;
  grid-column: 2 / 5;
  z-index: 1;
 
`
export const Image2 = styled(Image)`
  grid-row: 2 / 8;
  grid-column: 6 / 9;
  z-index: 1;
`
export const Image3 = styled(Image)`
  grid-row: 3 / 9;
  grid-column: 4 / 7;
  z-index: 2;
`


export const Background = styled.div`
  grid-column: quiz-start/ quiz-end;
  /* grid-column: col-start 2/ quiz-end; */
  
  grid-row: 1 / span 1;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  opacity: 0.1;
  z-index: 2;
  
`