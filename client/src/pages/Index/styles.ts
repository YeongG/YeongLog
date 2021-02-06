import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
  body {
    background-color:rgb(248, 249, 250);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
  margin-top: 50px;
`;
