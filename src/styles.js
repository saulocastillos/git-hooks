import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        box-sizing: border-box;
        background-color: rgb(40, 40, 40);
        height: 100%;
        font-family: 'Roboto';
        font-size: 1.3em;
        color: white;
    }
    ul {
      list-style: none;
    }
    *{
      margin: 0px;
      padding: 0px;
    }
`;

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10vh 10vh 1fr;
`;

export const Title = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;

  justify-self: center;
  align-self: center;

  font-size: 1.8em;

  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const SearchBox = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  justify-self: center;
  align-items: center
  
  display: flex;
  
`;

export const Input = styled.input`
  font-weight: 600;
  width: 200px;
  height: 40px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const List = styled.div`
  margin-top: 30px;
  grid-row: 3;
  grid-column: 1 / -1;
  justify-self: center;

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
