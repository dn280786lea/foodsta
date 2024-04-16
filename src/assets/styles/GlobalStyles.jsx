import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
	--button-green: #bbf330;
	--dark-green: #7eb101;
	--yellow-main: #ffe550;
	--black: #2c2c2c;
	--white: #fefefe;
	--2: #a7ce47;
	--tekst: #3d3d3d;
	--tekst2: #969696;
	--tekst3: #4a4a4a;
}

body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.005em;
    color: var(--color-text);
    background-color: var(--color-background);
    
}
#root {
  margin: 0 auto;
  width: 1280px; 
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

ul,
ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

a {
    color: currentColor;
    text-decoration: none;
}

img {
    display: block;
    height: auto;
    border: none;
    max-width: 100%;
}

button {
    font-family: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding:0
}

*, 
*::before, 
*::after {
    box-sizing:border-box;
}


input {
    font-family: inherit;

    &:focus {
    outline: none;
    }
}`;

export default GlobalStyles;
