//STYLED
import styled from "styled-components";
//BOOTSTRAP
import { Button } from "react-bootstrap";
//LINK
import { Link } from "react-router-dom";
//MEDIA BREAKPOINTS
import { device } from '../../../assets/constants/breakpoints'


export const Section = styled.div`
  width: 100%;
  padding-bottom: 4rem;
`

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  margin: 4rem 0 2rem 0;

  @media ${device.bp_large_2} {
    gap: 5px;
  } 
  @media ${device.bp_med_2} {
    width: 60%;
    margin: 0 auto;
  } 
  @media ${device.bp_small_2} {
    width: 75%;
  } 

  button {
    display: block;
    height: 5rem;
    min-width: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;

    @media ${device.bp_large_2} {
      height: 4.3rem;
      min-width: 4rem;
      font-size: 1.2rem;
    }
    .svg-inline--fa {
      font-size: 1.6rem;
      margin-bottom: 0.7rem;

      @media ${device.bp_large_2} {
        font-size: 1.4rem;
        margin-bottom: 0.2rem;
      }
    }
  }
`;

export const LinksContainer = styled.div`
  padding: 3rem;
  display: grid;
  align-items: center; 
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-column-gap: 5rem;
  align-items: flex-start;
  grid-row-gap: 2rem;
  

`
export const LinkItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.7rem;
  
`
export const LinkImage = styled.img`
  height:5rem;
`

export const LinkText = styled.div`
  padding-top:0.5rem;
  a {
    font-size: 2rem;
    line-height:2.1rem;
    color: var(--color-primary-light)
  }
  p {
    font-size: 1.4rem;
    color: var(--color-grey-dark-2)
  }
`


export const Heading=styled.h4`
background: var(--color-primary-light);
text-align:center;
margin: 0 0 3rem 0;

@media ${device.bp_large} {
  margin: 3rem 0;
  }
`
export const Title = styled.h3`
  letter-spacing: 1px;
  color: var(--color-primary-light);
  margin-left: 3rem;
  display: block;
  text-align: center;
  padding: 4rem 0 3rem 0;
`;