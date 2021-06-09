//Styled
import styled from "styled-components";
import { device } from '../../assets/constants/breakpoints'

export const Footer = styled.footer`
background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 2rem 8vw;
  grid-column: full-start / full-end;
  background-color: yellowgreen;
  color: white;  

`

export const Line =styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content:center;
  align-items:center;
`
export const Copy =styled.div`
font-size: 1.6rem;
  text-align:right;
  padding-right:3rem;
  flex-grow:1;
  opacity: 0.5;
`


export const Social =styled.div`
  flex-grow:1;
  font-size: 3rem;
  display: flex;
  gap: 3rem;
  svg {
    opacity: 0.5;
    cursor:pointer;
    &:hover {
    opacity: 1;
  }
  }

`