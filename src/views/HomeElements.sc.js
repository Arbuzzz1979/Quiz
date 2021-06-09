//Styled
import styled from "styled-components";
import { device } from "../assets/constants/breakpoints";


export const Container = styled.div`
  display: grid;
    grid-template-rows: 80vh repeat(5, min-content);
    grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];


    @media ${device.bp_xl} {
      grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];
  }      

  @media ${device.bp_large} {
      grid-template-rows: 60vh repeat(5, min-content);
      grid-template-columns: [full-start] minmax(4rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(4rem, 1fr) [full-end];
  }      
  @media ${device.bp_small_2} {
      grid-template-rows: 60vh repeat(6, min-content);
      grid-template-columns: [full-start] minmax(2rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(2rem, 1fr) [full-end];
  }      
  @media ${device.bp_landscape_small} {
      grid-template-rows: 100vh repeat(5, min-content);
    }  

`