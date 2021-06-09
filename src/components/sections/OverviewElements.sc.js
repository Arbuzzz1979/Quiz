//Styled
import styled from "styled-components";
import { device } from '../../assets/constants/breakpoints' 

export const Overview = styled.section`
  grid-column: center-start / center-end;
  grid-row: 2 / span 1;
  z-index:99;
  padding: 1.5rem 4.5rem;
  border-bottom: var(--line);

  display: flex;
  align-items: center;

  font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 1px;
  a {
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 1px;
  }
  ol {
    background-color: transparent!important;
    margin-bottom: 0!important;
  }

  @media ${device.bp_large} {
    border-bottom: none;
    padding: 1.5rem 0 1.5rem 4.5rem;
    a {
      color: var(--color-white);
    }
  }

  @media ${device.bp_small_2} {
    border-bottom: none;
    padding: 1.5rem 0 1.5rem 2rem;
    a {
      color: var(--color-white);
    }
  }
`  

// export const OverviewSection = styled.div`
//   position:relative;
//   display: flex;
//   align-items: center;
//   border-bottom: var(--line);
//   padding: 1.5rem 4.5rem;
//   background-color: white;
  
//   font-size: 1.6rem;
//     font-weight: 300;
//     letter-spacing: 1px;
//   a {
//     font-size: 1.6rem;
//     font-weight: 300;
//     letter-spacing: 1px;
//   }
//   ol {
//     background-color: transparent!important;
//     margin-bottom: 0!important;
//   }
//   /* @media ${device.bpLarge} {
//     padding: 1.5rem 3.5rem;
//   }
//   @media ${device.bpMedium} {
//     padding: 1.5rem 3rem;
// } */
// `;