//Styled
import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--color-primary-dark);
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: var(--font-primary);
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all .2s;

  &:hover {
      background-color: var(--color-primary-dark-2);
  }

`


export const ButtonTemplate = styled.button`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 4rem;
    display: inline-block;
    border-radius: 1px;
    transition: all 0.2s;
    position: relative;
    border:none;
    cursor: pointer;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0,0,0, 0.2);
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0,0,0, 0.2);
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 1px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`

export const WhiteButton = styled(ButtonTemplate)`
    background-color: var(--color-white);
    color: var(--color-grey-dark-3);
    &::after {
      background-color: var(--color-white);
    }
`

export const PrimaryButton = styled(ButtonTemplate)`
    background-color: var(--color-primary);
    color: var(--color-white);
    font-family: var(--font-logo);
    &::after {
      background-color: var(--color-primary);
    }
` 

export const GoldButton = styled(ButtonTemplate)`
    background-color: var(--color-primary-light);
    color: var(--color-primary-dark);
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    &::after {
      background-color: var(--color-primary-light);
    }
`