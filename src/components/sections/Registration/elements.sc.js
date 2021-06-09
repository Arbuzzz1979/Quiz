//Styled
import styled from "styled-components";
import { device } from '../../../assets/constants/breakpoints'

export const Links = styled.div`
  grid-column: col-start 7 / full-end;
  grid-row: 1 / span 1;
  padding: 3rem;
  z-index:99;

  display: flex;
  justify-content: flex-end;
  align-items:flex-start;
  gap: 2rem;

  a {
    font-size: 2rem;
    color: var(--color-primary-light);
  }

  @media only screen and (max-width: $bp-medium) {
      grid-column: 1 / -1;
  }
  
`  
export const Logout = styled.div`
cursor: pointer;
.fa-sign-out-alt {
  font-size: 3rem;
  color: var(--color-primary-light);
}
`