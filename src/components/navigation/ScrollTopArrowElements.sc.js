//Styled
import styled, { keyframes } from "styled-components";
import { device } from "../../assets/constants/breakpoints";

//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

// export const ScrollTop = styled.div`
//   position: fixed; 
//   width: 100%;
//   bottom: 20px;
//   right: 20px;
//   align-items: center;
//   /* height: 20px; */
//   justify-content: center;
//   z-index: 1000;
//   cursor: pointer;
//   animation: fadeIn 0.3s;
//   transition: opacity 0.4s;
//   opacity: 0.5;
//   display: ${({ show }) => (show ? 'flex' : 'none')};
//   color: var(--color-primary); 
//   font-size:5rem;

//   &:hover {
//     opacity: 1;
//   }
// `



export const ScrollTop = styled(FontAwesomeIcon)`
  position: fixed; 
  width: 100%;
  bottom: 20px;
  right: 20px;
  align-items: center;
  /* height: 20px; */
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  color: var(--color-primary); 
  font-size:5rem;

  &:hover {
    opacity: 1;
  }
`