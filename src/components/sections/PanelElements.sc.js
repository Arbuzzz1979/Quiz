//Styled
import styled from "styled-components";
import { device } from '../../assets/constants/breakpoints'


export const OpenIcon = styled.div`
position: fixed;
left: 1.5rem;
font-size: 3rem;
margin: 1.2rem 1.3rem 1.2rem 1rem;
.fa-bars{
    color: var(--color-primary-light); 
    cursor: pointer;
  }
`
export const Panel = styled.aside`
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
  height: 100%;
  background-color: var(--color-grey-dark-1);
  background: linear-gradient(
        to right bottom,
        var(--color-grey-dark-1),
        var(--color-primary-dark)
      );
  color: white;

 
`;
