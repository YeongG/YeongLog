import styled from "styled-components";
import { GlobalCenterDiv } from "../../GlobalStyle";
import { styledButton } from "../../lib/payloads/button";

export const Container = styled(GlobalCenterDiv)`
  margin-top: 0rem;

  * {
    transition: 150ms all;
  }
  h1,
  p {
    margin: 0;
  }

  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

export const FormWrap = styled.form`
  margin: 2rem 0;
`;

export const ButtonWrap = styled.div``;
export const FormButton = styled(styledButton)`
  height: 3rem;
  font-size: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1.5rem;
  outline: none;
  font-weight: bold;
  cursor: pointer;
`;
