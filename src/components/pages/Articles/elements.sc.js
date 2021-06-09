//STYLED
import styled from "styled-components";
//BOOTSTRAP
import { Button } from "react-bootstrap";
//LINK
import { Link } from "react-router-dom";
//MEDIA BREAKPOINTS
import { device } from '../../../assets/constants/breakpoints'

export const ArticleItems = styled.div`
  width: 100%;
  padding:4rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: repeat(4, auto-fit);
  grid-gap: 4rem;
  align-items: stretch;

  @media ${device.bp_xl} {
    grid-column-gap: 3.5rem;
  }

  @media ${device.bp_large_2} {
    grid-column-gap: 3.5rem;
    padding: 2rem 0rem;
    grid-gap: 2rem;
  }

  @media ${device.bp_large} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 2rem 0rem;
    
  }
  


  .masonry0{
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
  }
  .masonry1{
    grid-row: 1 / span 1;
    grid-column: 3 / span 1;    
  }  
  .masonry2{
    grid-row: 2 / span 2;
    grid-column: 1 / span 1;    
  }   
  .masonry3{
    grid-row: 2 / span 1;
    grid-column: 2 / span 2;    
  }  
  .masonry4{
    grid-row: 3 / span 1;
    grid-column: 2 / span 1;    
  }  
  .masonry5{
    grid-row: 3 / span 1;
    grid-column: 3 / span 1; 
  }         
  .masonry6{
    grid-row: 4 / span 1;
    grid-column: 1 / span 1; 
  }
  .masonry7{
    grid-row: 4 / span 1;
    grid-column: 2 / span 2; 
  }
  
  [class*="masonry"] {
    @media ${device.bp_large} {
      grid-row: auto;
      grid-column: auto;
  }
  }
`;

export const Masonry = styled.div`
  border-radius: 2px;
  transition: all 0.35s linear;
  padding: 2rem 2rem 1rem 2rem;
  box-shadow: 1rem 1rem 2rem rgba(50, 50, 0, 0.04);
  &:hover {
    background: #f1f2f6;
    transition: all 0.35s linear;
  }
`;

export const Title = styled.h3`
  letter-spacing: 1px;
  color: var(--color-primary-light);
  margin-left: 3rem;
  display: block;
  text-align: center;
  padding: 4rem 0 3rem 0;
  font-size: 2rem;
  @media ${device.bp_xl_2} {
    font-size: 2.5rem;
  }  
  @media ${device.bp_xl_1} {
    padding: 2rem 0 1.5rem 0;
  }  
`;

export const Item = styled(Link)`
  color: var(--color-primary-light);
  cursor: pointer;
  /* font-weight: 600; */
  text-decoration: none;
  display: inline;
  padding-bottom: 2px;

  @media ${device.bp_xl_2} {
    font-weight: 600;
  }  


  &:hover {
    text-decoration: none;
  }

  h3{
    text-align: left;
    padding: 0;
  }
`;



export const Description = styled.div`
  margin-top: 1rem;
  /* font-size: 1.5rem; */
  color: var(--color-grey-dark-3);
  text-transform: none;
  letter-spacing: 0px;
  position: relative;

  &::first-letter {
    color: var(--color-primary-dark);
    font-size: 3rem;
    line-height: 1rem;
    font-family: var(--font-logo);
  }

 p{
  @media ${device.bp_xl_1} {
    font-size: 1.6rem;
    padding:0;
  }  
 }
`;

export const Img = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  img {
    width: 100%;
    border-radius: 3px;
  }
  @media ${device.bp_large} {
    height:0;
    padding:0; 
  img{
    width: 0%;
  }
  }
`;

export const Container = styled.div`
  flex: 0 0 1;
  width:100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;


`;

export const InfoSP = styled.div`
  padding-right:1rem;
`
export const InfoMP = styled.div`
  padding-right:1rem;
  flex: 1;  
`

export const SubHeading = styled.h3`
  padding-bottom: 1rem;
  padding-top: 2rem;
`;

export const Text = styled.p`

`;

export const PageNav = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;


export const GoLink = styled(Button)`
  font-size:2rem;
  p {
    margin-bottom: 0;
    padding: 0 2rem;
  }
`

export const Code = styled.div`
  flex: 1;
  width: 85%;
  margin: 2rem auto;
  font-size: 2rem;
  @media ${device.bp_med_2} {
    width: 95%;
  }
  
`;

export const InsertImg = styled.div`
  text-align:center;
  padding: 2rem 0;

  img {
    width:75%;
    @media ${device.bp_med_2} {
    width: 95%;
  }    
  }

`

export const Heading=styled.h4`
background: var(--color-primary-light);
text-align:center;
@media ${device.bp_large} {
  margin: 3rem 0;
  }
`




