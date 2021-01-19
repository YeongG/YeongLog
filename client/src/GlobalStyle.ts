import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
        background-color:rgb(248, 249, 250);
        font-family:Noto Sans KR;
    }
    * {
        box-sizing:border-box;
    }

    .link {
      display: inline-block;
      font-weight: bold;
      color: rgb(18, 184, 134);
      cursor: pointer;
    }
`;

export const GlobalDiv = styled.div`
  width: 1728px;
  margin: 0 auto;

  @media (max-width: 1919px) {
    width: 1376px;
  }

  @media (max-width: 1440px) {
    width: 1024px;
  }

  @media (max-width: 1056px) {
    width: calc(100% - 2rem);
  }
`;