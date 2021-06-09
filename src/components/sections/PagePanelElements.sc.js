//Styled
import styled from "styled-components";
import { device } from '../../assets/constants/breakpoints'


export const OpenIcon = styled.div`
display:none;
@media ${device.bp_large} {
  display:block;
  /* position: fixed; */
padding-left: 1rem;
font-size: 3rem;
margin: 1.2rem 1.3rem 1.2rem 1rem;
.fa-bars{
    color: var(--color-primary-light); 
    cursor: pointer;
  }
}

`
export const Panel = styled.aside`
  grid-column: sidebar-start / sidebar-end;
  grid-row: 2 / -1;
  height: 100%;
  background-color: var(--color-grey-dark-1);
  background: linear-gradient(
        to right bottom,
        var(--color-grey-dark-1),
        var(--color-primary-dark)
      );
  color: white;

  @media ${device.bp_large} {
    grid-column: full-start / full-end;
    grid-row: 2 / span 1;
      /* background-color: none;
  background:  none; */
  
  }
  
`;
