import styled from 'styled-components';
import { device } from '../../../assets/constants/breakpoints'



export const Link = styled.nav`
  background: transparent;
  margin-left: auto;
  font-size:1.6rem;
  color: var(--color-primary-light);
  cursor: pointer;

  @media ${device.bp_large} {
    color: var(--color-white);
    a {
      color: var(--color-primary-light);
    }
  }
`;
