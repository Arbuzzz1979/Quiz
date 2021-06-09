//Styled
import styled from "styled-components";
import { device } from '../../assets/constants/breakpoints'

export const Sidebar = styled.aside`
  
  position: fixed;
  grid-column: sidebar-start / sidebar-end;
  grid-row: 2 / -1;
  z-index: 999;
  background-color: var(--color-grey-dark-1);
  background: linear-gradient(
        to right bottom,
        var(--color-grey-dark-1),
        var(--color-primary-dark)
      );
  width: 25rem;
  height: 100%;
  overflow: scroll;
  top: 0;
  transition: 0.3s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media ${device.bp_small_2} {
    width: 100%;
  }

`;

export const CloseIcon = styled.div`
text-align:right;
margin: 1.2rem 2rem;
.fa-times{
    color: var(--color-primary-light); 
    cursor: pointer;
  }
`
