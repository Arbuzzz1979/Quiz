//Styled
import styled from "styled-components";
import { HeadingPrimary } from "../../styles/HeadingStyle"
import { device } from '../../assets/constants/breakpoints'

export const TopScores = styled.section`
  grid-column: col-start 7 / full-end;
  grid-row: 1 / span 1;
  padding: 3rem;
  background-image: linear-gradient(to right bottom, #4e625d, #343a40);
  
  display: grid;
  align-content: center;
  justify-content: center;
  grid-row-gap: 2rem;

  
  @media ${device.bp_large} {
    grid-column: full-start / full-end;
    grid-row: 2 / span 1;  
    display: grid;
    grid-template-columns: 10rem repeat(3, min-content);
    align-items: center;
    padding: 1.5rem;   
    grid-column-gap: 3rem; 
  }

  @media ${device.bp_small_2} {
    grid-template-columns: min-content;
  }
  
  
`  

export const Title = styled.h1`
  font-size: 3.6rem;
  color: var(--color-primary-light);
  font-family: 'Oswald', cursive;

  @media ${device.bp_large} {
    font-size: 2.6rem;
  }
`