import styled from "styled-components";
import { device } from '../../../assets/constants/breakpoints'

export const Row = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 2rem;
  grid-row-gap: 5vh;
  align-items: center;

  span {
    text-align: right;
  font-weight: 700;
  color: var(--color-primary-light);   
  display:block; 
  }
`;

export const RowUser = styled(Row)`
  border-top: var(--line);
`;

export const Avatar = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  display: ${({ show }) => (show ? 'block' : 'none')};

  @media ${device.bp_large} {
    width: 4rem;
    height: 4rem;
  }  

  @media ${device.bp_med_2} {
    width: 0rem;
    height: 0rem;
  }
  @media ${device.bp_small_2} {
    width: 4rem;
    height: 4rem;
  }
`;

export const Details = styled.div`
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 1px;
  margin-top: -3px;
  
  color: var(--color-primary-light);
  font-family: 'Oswald', cursive;
  h4 {
    color: var(--color-white);
    /* font-size: 1.6rem;
    line-height: 1.6rem; */
  }
  @media ${device.bp_large} {
    font-size: 1.2rem;
    h4{
      font-size: 1.4rem;
    }
  }  
`;





