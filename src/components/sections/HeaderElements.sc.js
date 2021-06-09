//Styled
import styled from "styled-components";
import { device } from '../../assets/constants/breakpoints'

export const Header = styled.header`
  grid-column: sidebar-start / full-end;
  grid-row: 1 / span 1;
  font-size: 1.6rem;
  background-color: white;
  border-bottom: var(--line);
  line-height: 5rem;
  .navbar  {
    height: 12rem;
    background: linear-gradient(
        to right bottom,
        var(--color-primary-dark),
        var(--color-primary-dark-2)
      );
  }

  @media ${device.bp_large} {
    grid-column: full-start / full-end;
  }      

  
`;