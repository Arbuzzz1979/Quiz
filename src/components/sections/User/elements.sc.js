//Styled
import styled from "styled-components";
import { device } from '../../../assets/constants/breakpoints'





export const User = styled.div`
 display:flex;
 flex-direction: column;
 align-items: center;
 color: var(--color-white);

 
 table, tr, td, th{
  border:none;
  vertical-align: middle;
  background-color:none;
  border-bottom: none;
}

td {
  line-height:1.8rem;
  color: var(--color-white);
  width: 50%;
}
i {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-grey-light-4);
}
span {
  font-weight: 600;
  font-size: 2.5rem;
  color: var(--color-primary-light);
  padding-left: 2rem;
} 

a {
    font-size: 1.8rem;
    color: var(--color-primary-light);
    text-decoration: none;
    text-align:center;
  }

a:hover {
  text-decoration: underline;
}

`  

export const Image = styled.img`
  /* align-self: stretch;
  display: flex; */
    align-items: center;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    margin-top:2rem;
`;

export const Name = styled.h3`
  text-align:center;
  
`

export const Score = styled.div`
text-align: center;
  color: var(--color-primary-dark-2);
    background: var(--color-primary-light);
    font-family: var(--font-subtitle);
    
    width:100%;
    margin: 2rem 0 0.9rem 0;
`
