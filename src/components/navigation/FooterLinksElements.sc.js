//Styled
import styled from "styled-components";
import { device } from '../../assets/constants/breakpoints' 

export const Links = styled.ul`
  flex-grow:1;
  letter-spacing: 0.5rem;
  list-style: none;
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
`
export const Item = styled.li`
  
  a {
    font-size: 2rem;
    color: var(--color-primary-light);
  }
`