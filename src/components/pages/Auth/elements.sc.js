//Styled
import styled from "styled-components";
//MEDIA BREAKPOINTS
import { device } from "../../../assets/constants/breakpoints";

import ImgAuthorization from "../../../assets/images/authorization.png";
import ImgProfile from "../../../assets/images/profile.png";

export const Heading=styled.h4`
background: var(--color-primary);
text-align:center;
margin: 0;
color: var(--color-white);

@media ${device.bp_large} {
  margin: 3rem 0 0 0;
  }
`

export const AuthContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  background-color: var(--color-white);
  min-height:90%; 
  margin:0rem 0;
  @media ${device.bp_small_2} {
    display: block;
  } 
`; 

export const AuthInfo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  flex: 0 0 55%;
  @media ${device.bp_xl} {
    flex: 0 0 50%;
  }
  @media ${device.bp_large} {
    flex: 0 0 40%;
  }

  background-image: linear-gradient(to right bottom, #4e625d, #343a40),
    url(${ImgAuthorization});
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
  clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);

  @media ${device.bp_small_2} {
    background-position: center;
    height: 20rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  }
`;

export const ProfileInfo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 55%;
  @media ${device.bp_xl} {
    flex: 0 0 50%;
  }
  @media ${device.bp_large} {
    flex: 0 0 40%;
  }

  background-image: linear-gradient(to right bottom, #4e625d, #343a40),
    url(${ImgProfile});
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
  clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);

  @media ${device.bp_small_2} {
    background-position: center;
    height: 20rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  }
`;

export const AuthData = styled.div`
  flex: 0 0 45%;
  @media ${device.bp_xl} {
    flex: 0 0 50%;
  }
  @media ${device.bp_large} {
    flex: 0 0 60%;
  }

  display: flex;
  align-items: center;
  background-color: white;
  font-size: 1.8rem;

  a {
    font-size: 1.8rem;
    color: var(--color-primary-light);
  }

  .card {
    flex: 1;
    border: none;
    border-radius: 0;
    justify-content: center;
  }

  .card h2 {
    font-size: 2.7rem;
    line-height: 2.7rem;
  }
  .card input,
  .card button {
    font-size: 1.8rem;
  }
  .card-body {
    padding: 1rem 2.5rem 0 2.5rem;
  }
  .form-group {
    margin-bottom: 0.8rem;
  }
  .btn-link {
    font-size: 1.8rem;
    margin-top: 1rem;
    color: var(--color-primary-light);
  }
  .btn-secondary {
    margin-top: 0.8rem;
    font-size: 1.8rem;
    color: var(--color-white);
  }
  .form-check {
    text-align: right;
    input {
      margin-top: 0.4rem;
    }
    label {
      margin-left: 1rem;
    }
  }
`;

export const Avatar = styled.div`
  /* background:rebeccapurple; */
  margin-top: 2rem;
  width: 15rem;
  height: 15rem;
  align-self: center;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const History = styled.div`
  text-align: center;
  overflow-y: scroll;
  max-height: 40vh;

  /* table {
    width: 30rem;
  } */

  td {
    text-align: center;
    vertical-align: middle;
  }

  button {
    border: none;
  }

  h3 {
    color: var(--color-primary);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SignupData = styled(AuthData)`
  @media ${device.bp_small_2} {
    transform: translateY(-10rem);
    background-color: transparent;
  }
  .card {
    @media ${device.bp_small_2} {
      background-color: transparent;
    }
  }
`;

export const ProfileData = styled(AuthData)`
  @media ${device.bp_small_2} {
    transform: translateY(-10rem);
    background-color: transparent;
  }
  .card {
    @media ${device.bp_small_2} {
      background-color: transparent;
    }
  }
`;
