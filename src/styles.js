import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        box-sizing: border-box;
        background-color: rgb(40, 40, 40);
        height: 100%;
        margin: 0px;
        padding: 0px;
        font-family: 'Roboto';
        font-size: 1.3em;
        color: white;
    }
    ul {
      list-style: none;
    }
`;

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 60px 1fr:
  grid-template-areas: 
    "h h h h h h h h h h h h"
    "c c c c c c c c c c c c"
    "f f f f f f f f f f f f";
`;

export const Title = styled.div`
  margin: 10px 0 20px 0;

  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const List = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  display: flex;
  justify-content: center;

  li {
    margin: 6px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.6em;
  }
`;
