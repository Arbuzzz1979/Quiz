//Styled
import styled from "styled-components";
import { PrimaryButton } from "../../styles/ButtonStyle";
import { device } from '../../assets/constants/breakpoints'

export const Section = styled.section`
  /* grid-column: center-start / center-end; */
  grid-column: center-start / center-end;
  text-align: center;
  position: relative;
  padding: 9rem 1vw;

  h4 {
    background: var(--color-primary-light);
    font-family: var(--font-subtitle);
  }
  h3 {
    color: var(--color-primary-light);
    font-style: italic;
  }
  h2 {
    margin-top: 4rem;
  }
  @media ${device.bp_med_2} {
    padding: 6rem 1vw;
  }
`;

export const Container = styled.div`
  margin: 8rem 0 6rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 5rem;
  align-items: start;

  @media ${device.bp_large} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    /* grid-gap: 4rem; */
  }

  @media ${device.bp_small} {
    grid-column-gap:1rem;
    grid-row-gap:2rem;
    margin: 4rem 0 2rem 0;
  }       
    
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: var(--color-primary-light);
    font-size: 6rem;
  }
`;

export const Button = styled(PrimaryButton)`
  /*  */
  justify-self: center;
  margin-top: 1.5rem;
`;
