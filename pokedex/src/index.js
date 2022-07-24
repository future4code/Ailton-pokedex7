import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import Font from "./assets/fonts/Pokemon-Hollow.ttf";
import Font2 from "./assets/fonts/Pokemon-Solid.ttf";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
    @font-face {
    font-family:'Pokemon Hollow';
    src: url(${Font});
  }
@font-face {
  font-family: 'Pokemon Solid';
  src: url(${Font2});
}
  
}
#root, body {
  min-height: 100vh;
  min-width: 100%;

  /* background: #EFEFBB; */
    /* background: linear-gradient(to right, green, orange, blue); */
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
  }
  
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }

}
#root{
  display:flex;
  flex-direction: column;
}

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
