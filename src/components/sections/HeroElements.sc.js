//Styled
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../assets/constants/breakpoints";
import { HeadingPrimary } from "../../styles/HeadingStyle";
import { GoldButton } from "../../styles/ButtonStyle";

import heroBG from "../../assets/images/hero2.jpg";
import quiz_logo from "../../assets/images/quiz_logo_640.png";
import logo from "../../assets/images/logo.png";

export const Hero = styled.header`
  grid-column: full-start / col-end 6;
  grid-row: 1 / span 1;
  background-size: cover;
  background-blend-mode: multiply;
  background-image: linear-gradient(to right bottom, #4e625d, #343a40),
    url(${heroBG});

  text-align: center;
  display: grid;
  align-items:center;
  align-content: center;
  justify-content: center;
  grid-row-gap: 5rem;

  @media ${device.bp_small_2} {
    grid-row-gap: 3rem;
  }

  @media ${device.bp_landscape_med} {
    grid-row-gap: 2rem;
  }  
  
  @media ${device.bp_large} {
    grid-column: full-start / full-end;
  }
`;

// export const Brand = styled.div`
//   margin: 5rem;

//   &:hover {
//     text-decoration: none;
//   }
// `;

export const Title = styled.span`
  display: block;
  height: 0;
  width: 0;
  opacity: 0;
  @media ${device.bpMedium} {
    margin-left: 2rem;
    font-size: 2.9rem;
    line-height: 4.35rem;
    color: var(--color-primary-light);
    font-family: "Akaya Telivigala", cursive;
  }
`;

export const Logo = styled.div`
  /* height: 4.25rem; */
  background-image: url(${quiz_logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  /* width: 25vw; */
  /* height: 16rem; */
  height: 16rem;
  
  @media ${device.bp_small} {
    height: 8rem;
  }
  @media ${device.bp_small_2} {
    height: 9rem;
  }
  @media ${device.bp_med_2} {
    height: 14rem;
  }

  @media ${device.bp_landscape_med} {
    height: 10rem;
  }  
  
`;

export const NavLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export const Slogan = styled.h1`
  font-size: 3.6rem;
  /* color: var(--color-white); */
  color: var(--color-primary-light);
  font-family: var(--font-heading);

  @media ${device.bp_small_2} {
    font-size: 2.6rem;
  }

  @media ${device.bp_landscape_med} {
    font-size: 2.6rem;
  }  

`;

export const Icons = styled.div`
  font-size: 7.6rem;
  color: var(--color-white);
  opacity: 0.45;
  font-family: var(--font-heading);
  display: flex;
  justify-content: center;
  gap: 0rem 3rem;

  @media ${device.bp_small_2} {
    font-size: 5.6rem;
  }

  @media ${device.bp_landscape_med} {
    display:none;
  }  
  
  svg {
    transition: all 1s ease-out;
  }

  svg:hover {
    color: var(--color-primary-light);
    transform: scale(1.3);
    opacity: 1; 
  }
`;

export const Button = styled(GoldButton)`
  /*  */
  justify-self: center;
  margin-top: 1.5rem;
`;
