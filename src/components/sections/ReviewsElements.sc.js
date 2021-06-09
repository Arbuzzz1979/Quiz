//Styled
import styled from "styled-components";
import { GoldButton } from "../../styles/ButtonStyle";
import { device } from "../../assets/constants/breakpoints";

import BG from "../../assets/images/reviews.jpg";


export const Section = styled.section`
  /* grid-column: center-start / center-end; */
  grid-column: full-start / full-end;
  text-align: center;
  position: relative;
  padding: 8rem 6rem;
`;

export const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.35;
  overflow: hidden;
  .content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;


export const Container = styled.div`
  /* grid-column: center-start / center-end; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: start;

  h4 {
    background: var(--color-primary);
    color: var(--color-white);
    font-family: var(--font-subtitle);
    grid-column: 1 / 2;
  }

  @media ${device.bp_large} {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
  }


`;

export const Reviews = styled.div`
  grid-column: 1 / 2;
  @media ${device.bp_large} {
    grid-column: 1 / 2;
  }
`

export const Form = styled.div`
  grid-column: 2 / 3;
  /* background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  opacity: 0.85;
  padding: 4rem; */
  padding: 4rem 0 4rem 4rem; 

  @media ${device.bp_large} {
    grid-column: 1 / 2;
    padding: 4rem; 
  }
  @media ${device.bp_small_2} {
    grid-column: 1 / 2;
    padding: 4rem 0; 
  }
  

  .card{
    background-color: var(--color-secondary-light-2);
    opacity: 0.85;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    padding-bottom: 14rem; 
  }
  .form-control {
    font-size: 1.6rem;
    &:focus {
      border-color: var(--color-primary-light);
      box-shadow: var(--color-primary-light);
    }
  }
  h3{
    padding: 3rem 0;
    
  }
`

export const Item = styled.div`
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 2rem;
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  opacity: 0.85;
  /* background: var(--color-white); */
  background-color: var(--color-secondary-light-2);
  padding:2rem;
  margin-bottom:2rem;

  @media ${device.bp_large} {
    padding:  2rem 4rem;
  }
`
export const User = styled.img`
  grid-column: 1 / 2;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: ${({ show }) => (show ? 'block' : 'none')};

  @media ${device.bp_large} {
    width: 8rem;
    height: 8rem;
  }

  @media ${device.bp_small_2} {
    width: 6rem;
  height: 6rem;
  }
`
export const Text = styled.div`
  grid-column: 2 / 2;
  text-align: left;

`

export const Button = styled(GoldButton)`
  /*  */
  justify-self: center;
  margin-top: 1.5rem;
`;