import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --primary: #333533;
  --white: #fff;
}

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    font-family: --apple-system, Roboto, sans-serif;
    background-color: var(--primary);
  }

  button, input {
    cursor: pointer;
  }


  li {  list-style: none;}

  a {  text-decoration: none;}

  .App {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }

  `;
