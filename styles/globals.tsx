import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to bottom, #3f87a6, #ebf8e1, #f69d3c);
  color: #fff;
  font-size: 20px;
}

#__next {
  min-height: 100vh;
  display: grid;
  grid-auto-rows: auto 1fr auto;
}

main {
  padding: 20px;
}

header,
footer {
  min-height: 80px;
}

header {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  display: flex;
  align-items: center;
  padding: 0 20px;
}

footer {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

a {
  color: #fff;
  text-decoration: none;
}`;