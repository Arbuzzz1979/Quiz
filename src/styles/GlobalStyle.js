import { createGlobalStyle } from 'styled-components';
import { device } from '../assets/constants/breakpoints' 

  //bpLargest 1200px
  //bpLarge 1100px
  //bpMedium 900px
  //bpSmall 600px
  //bpSmallest 500px


const GlobalStyle = createGlobalStyle `

:root {
  --color-primary: #00897b;
  --color-primary-light: #c1bf7c;
  
  --color-primary-dark: #334d50;
  --color-primary-dark-2: #343a40;
  
  --color-secondary-light: #f0a787;
  --color-secondary-light-2: #f0ebe7;
  --color-secondary-dark: #e54d26;

  --color-tertiary-light: #37b7f3;
  --color-tertiary-dark: #026db5;

  --color-grey-light-1: #eeeeee;
  --color-grey-light-2: #e0e0e0;
  --color-grey-light-3: #bdbdbd;
  --color-grey-light-4: #9e9e9e;

  --color-grey-dark-1: #212121;
  --color-grey-dark-2: #424242;
  --color-grey-dark-3: #616161;

  --color-white: #fff;
  --color-black: #000;
  --color-gold: #FFD700;

  --color-green: #42997f;
  --color-green-light: #4db193;

  --color-red: red;

  --color-blue: #316ddb;
  --color-blue-light: #387cf6;

  --color-bg-light: #e7eaf3;
  
  --shadow-dark: 0 2rem 6rem rgba(0,0,0,0.3);
  --shadow-light: 0 2rem 5rem rgba(0,0,0,.06);

  --line: 1px solid var(--color-grey-light-2);

  --font-primary: 'Roboto Condensed', sans-serif;
  --font-heading: 'Oswald', sans-serif;
  --font-subtitle: 'Chango', cursive;
  --font-logo: 'Akaya Telivigala', cursive;
}


* {
  margin:0;
  padding:0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  color: var(--color-primary-dark);
} 
a:hover {
  color: var(--color-primary-light);
}
.breadcrumb-item.active {
  color: var(--color-primary-light);
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px

  @media ${device.bp_small_2} { 
    font-size: 37.5%;
  }
  @media ${device.bp_xl} { 
    font-size: 50%;
  }
  @media ${device.bp_xl_2} { 
    font-size: 68.75%;
  }

} 

h1 { font-size: 4.5rem; font-family: var(--font-heading);}
h2 { font-size: 4rem; font-family: var(--font-heading);}
h3 { font-size: 2.5rem; font-family: var(--font-heading);}
h4 { font-size: 2rem; font-family: var(--font-subtitle);}
h5 { font-size: 1.6rem; font-family: var(--font-subtitle);}

p { font-size: 1.8rem; }


body {
  font-family: var(--font-primary);
  font-weight: 400;
  color: var(--color-grey-dark-2);
  font-size:1.6rem;
}



/* The emerging W3C standard
   that is currently Firefox-only */
   * {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.7);
  border-radius: 20px;
  border: transparent;
}

`;

export default GlobalStyle;

