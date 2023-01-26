import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    background-color: #fcf8f8;
    
  }
  button {
    cursor: pointer;
  }
`;