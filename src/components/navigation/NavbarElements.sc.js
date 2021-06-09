//Styled
import styled from "styled-components";
import { device } from "../../assets/constants/breakpoints";


export const Logo = styled.img`
  height: 4.25rem;
`;

export const Title = styled.span`
  margin-left: 2rem;
  font-size: 2.9rem;
  line-height: 4.35rem;
  color: var(--color-primary-light);
  font-family: "Akaya Telivigala", cursive;
`;

export const User = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;

  .user-photo {
    height: 3.35rem;
    width: 3.35rem;
    border-radius: 50%;
    margin-right: 1rem;
    background-color: var(--color-white);
    /* border: 1px solid #fff; */
  }
`;
