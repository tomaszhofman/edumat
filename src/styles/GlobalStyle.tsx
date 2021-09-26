import { createGlobalStyle } from 'styled-components';

//   SPACING SYSTEM (px)
//   2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
//   FONT SIZE SYSTEM (px)
//   10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

export const GlobalStyle = createGlobalStyle`
:root {
  --blue: #1e90ff;
  --gray: #EFEFEF; 
}
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}
html {
    font-size: 62.5%;
}
body {
    font-family: sans-serif;
    line-height: 1;
    font-weight: 400;
    color: hsl(0, 0%, 41%);
}
`;
