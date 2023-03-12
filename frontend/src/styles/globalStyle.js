import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-family: ${({theme}) => theme.fonts.body};
    font-weight: 500;
    outline: none;
  }
  body {
    background: ${({theme}) => theme.colors.body};
  }
  #root {
    width: 600px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;