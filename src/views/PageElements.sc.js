//Styled
import styled from "styled-components";
import { device } from "../assets/constants/breakpoints";
//IMAGES
import resoursesBG from "../assets/images/resoursesBG.jpg";

export const Container = styled.div`

  display: grid;
    grid-template-rows: repeat(2, min-content) auto min-content;
    grid-template-columns: [sidebar-start] 25rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];
    min-height: 100vh;
    background-color: var(--color-grey-light-1);

    
  @media ${device.bp_large} {
    grid-template-rows: repeat(2, min-content) auto min-content;
    grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];
  }
  @media ${device.bp_med_2} {
    grid-template-columns: [full-start] minmax(3rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(3rem, 1fr) [full-end];
  } 

`
export const Content = styled.section`
  grid-column: center-start / center-end;
  /* grid-row: 3 / span 1; */
  justify-items: stretch;
  z-index:99;
  min-height: 81vh;

`  

export const Background = styled.div`
grid-column: full-start / full-end;
background-image: url(${resoursesBG});
background-repeat: no-repeat;
background-position: right bottom;
grid-row: 2 / span 2;
opacity: .1;
`