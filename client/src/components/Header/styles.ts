import styled from "styled-components";
import { GlobalDiv } from "../../GlobalStyle";

export const Container = styled(GlobalDiv)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const HeaderLeft = styled.div``;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
  a {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 130ms all;

    &:hover {
      background: rgba(0, 0, 0, 0.043);
    }
  }
`;

export const LoginButton = styled.button`
  border: none;
  outline: none;
  padding: 0.3rem 1rem;
  background: rgb(52, 58, 64);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 1rem;
  margin-left: 1rem;
  transition: 130ms all;

  &:hover {
    background: rgb(134, 142, 150);
  }
`;
