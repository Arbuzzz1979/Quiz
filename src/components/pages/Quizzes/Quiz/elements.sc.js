//Styled
import styled, { keyframes } from "styled-components";
import { device } from '../../../../assets/constants/breakpoints' 

export const Container = styled.div`
  flex: 1;
`;

export const HeadingPrimary=styled.h4`
grid-column: 1/3;
background: var(--color-primary-light);
text-align:center;
margin-bottom: 4.5rem;
@media ${device.bp_large} {
  margin: 3rem 0;
  }
` 

export const HeadingSecondary = styled.h2`
  font-size: 3rem;
  text-align:center;
  margin-top:6.5rem;
  margin-bottom:3.5rem;
  color: var(--color-primary-dark);
  
  letter-spacing: 2px;
`;


export const Answer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-gap: 2.5rem;

  button {
    font-size: 2rem;
    text-align: left;
    padding: 1.2rem 2rem 1.2rem 4rem;
    position: relative;
    box-shadow: var(--shadow-light);
    /* background-color: var(--color-primary-light); */

    &::after {
      content: "";
      position: absolute;
      font-size: 1.6rem;
      padding: 0.1rem 0.5rem 0 0.5rem;
      top: 0;
      left: 0;
      background-color: var(--color-primary-dark);
      color: var(--color-white);
    }
  }
  .active {
    background-color: var(--color-primary-dark);
    color: var(--color-white);
  }

  .letter0 {
    &::after {
      content: "A";
    }
  }
  .letter1 {
    &::after {
      content: "B";
    }
  }
  .letter2 {
    &::after {
      content: "C";
    }
  }
  .letter3 {
    &::after {
      content: "D";
    }
  }
`;

export const pulsate = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
  }
  100% {
    transform: scale(1);
    box-shadow: none;
  }
`;

const pulsate2 = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  }
  100% {
    transform: scale(1);
    box-shadow: none;
  }
`;

export const NextQuestion = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  button {
    font-size: 2rem;
    text-align: left;
    padding: 1.2rem 5rem;
    position: relative;
    box-shadow: var(--shadow-light);
  }
  .next {
    background-color: var(--color-primary-dark);
    color: var(--color-white);
    transition: all 0.2s;
    animation: ${pulsate} 1s infinite;
  }
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.bp_large_2} {
    display: block;
  }
  h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 2.5rem;
    color: var(--color-primary-dark);
    letter-spacing: 2px;
  }
  h4 {
    font-size: 1.6rem;
    text-align: center;
    margin-top: 6.5rem;
    color: var(--color-primary-dark);
    letter-spacing: 2px;
  }
  span {
    color: var(--color-primary);
  }  
`;

export const Current = styled.div`
  flex: 0 0 50%;
  padding: 0 3rem;
  text-align: center;
  
  button {
    font-size: 1.8rem;
    text-align: left;
    padding: 0.5rem 3rem;
    position: relative;
    box-shadow: var(--shadow-light);
    background-color: var(--color-primary);
    color: var(--color-white);
    transition: all 0.2s;
    animation: ${pulsate2} 2s infinite;
  }
`;

export const History = styled.div`
  flex: 0 0 50%;
  padding: 0 3rem;
  text-align: center;

  /* @media ${device.bp_large_2} {
    padding: 0 10rem;
  }
  @media ${device.bp_med_2} {
    padding: 0 0;
  }
  @media ${device.bp_small_2} {
    padding: 0 0;
  } */
  
  h3 {
    margin-top: 6.5rem;
    margin-bottom: 1.5rem;
  }
`
export const Heading = styled.h4.attrs((/* props */) => ({ tabIndex: 0 }))`
  font-size: 2rem;
  display: block;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-white);
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  text-align: center;
  width: 100%;

  span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;

    &.html_quiz_caption {
      display: block;
      /* border-bottom: 2px solid #fff; */
      background: linear-gradient(
        to right bottom,
        var(--color-secondary-light),
        var(--color-secondary-dark)
      );
    }
    &.css_quiz_caption {
      display: block;
      background: linear-gradient(
        to right bottom,
        var(--color-tertiary-light),
        var(--color-tertiary-dark)
      );
    }
    &.js_quiz_caption {
      display: block;
      background: linear-gradient(
        to right bottom,
        var(--color-primary-light),
        var(--color-primary-dark)
      );
    }
  }
`;

export const Details = styled.div`
  padding: 3rem;

  ul {
    list-style: none;
    width: 100%;
    margin: 0 auto;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: solid 1px var(--color-grey-light-2);
      }
    }
  }
`;

export const ReportList = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr, 2fr;

  padding-top: 5rem;
  margin: 2rem;

`  

export const HeadingReport = styled(Heading)`
  top: 1rem;
`;
export const DetailsReport = styled(Details)`
  padding: 1rem;
  @media ${device.bp_med_2} {
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 0;
    /* ul {
    list-style: none;
    width: 100%;
    margin: 0 auto;

    li {
      display: inline;
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;
      &:not(:last-child) {
        border-bottom: none;
      }
    } */
    }
  }    
`;

export const Result = styled.div`
  grid-column: 1/2;
  text-align: center;
  padding-right: 3rem;
  p {
    font-size: 2rem;
    color: var(--color-primary);
  }
  @media ${device.bp_med_2} {
    grid-column: 1/3;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, min-content);
  }    
`;


export const Score = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: var(--color-tertiary-dark);
  p {
    font-size: 3rem;
  }
  @media ${device.bp_med_2} {
    grid-row: 1/2;
    grid-column: 2/3;
    
    p{
      display: inline;
      font-size: 2rem;
      
    }
  }  
`;
export const Answers = styled.div`
  grid-column: 2/3;
  overflow-y: scroll;
  max-height: 75vh;
  @media ${device.bp_med_2} {
    grid-column: 1/3;    
    max-height: 60vh;
  }  
`;

export const User = styled.img`
  /* align-self: stretch;
  display: flex; */
    align-items: center;
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
    margin-top:2rem;
  
  @media ${device.bp_med_2} {
    grid-row: 1/3;
    grid-column: 1/2;
    height: 10rem;
    width: 10rem;
  }    
`;

export const Name = styled.p`
    font-size: 2rem;
    color: var(--color-primary);
    @media ${device.bp_med_2} {
    grid-row: 1/2;
    grid-column: 1/2;
    margin-top: 1rem;
  }        
`



export const CardHeading = styled.h3`
  font-size: 1.8rem;
  text-align:left;
  padding:1rem;
  
  color: var(--color-primary-dark);
  background-color: var(--color-grey-light-1);
  letter-spacing: 2px;
`;

export const Report = styled.div`
  margin-top: 2rem;
  .wrong {
    label::after {
    }
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.3rem 0 0.3rem 0.5rem;

  .form-check {
    label {
      padding-left: 0.7rem;
      padding-right: 0.9rem;
    }
  }
  .fa-check {
    color: var(--color-green);
    font-size: 1.6rem;
  }
  .fa-times {
    color: var(--color-red);
    font-size: 1.6rem;
    height: 1.6rem;
    line-height: 2.6rem;
  }
  .letter0 label {
    &::before {
      content: "A.";
    }
  }
  .letter1 label {
    &::before {
      content: "B.";
    }
  }
  .letter2 label {
    &::before {
      content: "C.";
    }
  }
  .letter3 label {
    &::before {
      content: "D.";
    }
  }
`;

export const HistoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, min-content);
  /* margin: 1rem; */
  
  @media ${device.bp_xl} {
    grid-template-columns: 1fr 3fr;
  }  
`;

// export const HistoryHeading = styled(HeadingPrimary)`
//   grid-column: 1/3;
//   padding-left:1.5rem;
// `;

export const HistoryHeading=styled.h4`
grid-column: 1/3;
background: var(--color-primary-light);
text-align:center;
margin-bottom: 3.5rem;
@media ${device.bp_large} {
  margin: 3rem 0 2rem 0;
}
@media ${device.bp_small_2} {
  margin: 3rem 0 0rem 0;
}
` 

export const HistoryBest = styled(Result)`
  grid-column: 1/2;
  grid-row: 2/3;

  @media ${device.bp_xl} {
    padding-right: 0;
    grid-column: 1/3;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`;


export const Scroll = styled.div`
    overflow-y:scroll;
    max-height: 57vh;
`

export const HistoryTable = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  text-align: center;
  font-size: 1.8rem;

  
  @media ${device.bp_xl} {
    grid-row: 3/4;
    padding-top: 1rem;
  }
  @media ${device.bp_small_2} {
    grid-column: 1/3;
    grid-row: 3/4;
  }

  
  .btn-outline-secondary {
    font-size: 1.8rem;
  }
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

export const HistoryUser = styled.div`

@media ${device.bp_xl} {
    grid-column: 1/2;
  }
@media ${device.bp_small_2} {
    display:none;
  }  
`

export const HistoryBestDetails = styled(Details)`
  padding: 1rem;

  @media ${device.bp_xl} {
    grid-column: 2/3;
    padding: 0;
    padding-top: 3rem;
  }

  @media ${device.bp_small_2} {
    grid-column: 1/3;
  }  
  ul {
    text-align: left;
  }

  li span {
    font-size: 1.6rem;
    color: var(--color-tertiary-dark);
  }
  h3 {
    margin-top: 0.2rem;
    color: var(--color-tertiary-dark);
  }
  table, tr, td, th{
    border:none;
    vertical-align: middle;
    background-color:none;
  }
  td {
    width: 33%;
    white-space: nowrap;
  }
  i {
    font-weight: 600;
    color: var(--color-grey-light-4);
  }
  span {
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--color-tertiary-dark);
  }
`;



export const TitleCode = styled.h2`
  font-size: 3rem;
  text-align:center;
  margin-top: 4rem;
  color: var(--color-primary-dark);
  letter-spacing: 2px;
`;

export const TextCode = styled.p`
  font-size: 1.8rem;
  text-align:center;
  margin-bottom:1.5rem;
  color: var(--color-primary-dark);
  letter-spacing: 1px;
`;

export const Code = styled.div`
font-size: 1.8rem;
  flex: 1;
  width: 75%;
  margin: 2rem auto 4rem auto;
`;

export const ReportTextCode = styled.p`
  font-size: 1.6rem;
  margin-bottom:1rem;
  color: var(--color-primary-dark);
  letter-spacing: 0px;
  padding:0 1rem;
`;

export const ReportCode = styled.div`
font-size: 1.6rem;
  flex: 1;
  width: 75%;
  margin: 1rem auto 2rem auto;
`;