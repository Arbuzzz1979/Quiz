//Styled
import styled from "styled-components";
import { device } from '../../../assets/constants/breakpoints'

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 10000;
`;

export const Wrapper = styled.div`
  width: 75vw;
  height: 85vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow:hidden;
  @media ${device.bp_med_2} {
    width: 85vw;
    height: 90vh;
  }  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  font-size: 2rem;
  color: var(--color-white);
  top: 1.7rem;
  right: 0rem;
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
  z-index: 50;
`;
