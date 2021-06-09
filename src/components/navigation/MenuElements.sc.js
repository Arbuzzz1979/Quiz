//Styled
import styled from "styled-components";
import { device } from '../../assets/constants/breakpoints' 

export const Menu = styled.ul`
  font-size: 1.6rem;
  letter-spacing: 0.5rem;
  list-style: none;
  margin-top: 3.5rem;
`
export const Item = styled.li`
  position: relative;
  color: var(--color-white);
  font-size:1.6rem;
  margin-bottom: 0.5rem;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3px;
    background-color: var(--color-primary-dark);
    transform: scaleY(0);
    transition: transform 1s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
    background-color 0.1s;
    }
    &:hover::before {
     transform: scaleY(1);
     width: 100%;
    }

    & a.active {
      color: var(--color-primary-dark);
      background-color: var(--color-primary-dark);
    }
    
  a:link,
  a:visited {
    color: var(--color-white);
    text-decoration: none;
    display: block;
    padding: 1.5rem 3rem;
    position: relative;
    z-index: 10;
    display: flex;
    // align-items: center;
    justify-content: flex-end;
  }

  a.active {
    color: var(--color-primary-light);
  }

  a {
    color: var(--color-white);
    font-size:1.6rem;
  }
`