import { Link } from "react-router-dom";
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
  > a {
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

export const LoginedContainer = styled.div`
  margin-left: 1.25rem;
  display: flex;
  align-items: center;
  position: relative;

  > svg {
    margin-left: 0.3rem;
    opacity: 0.5;
    transition: 125ms all;
  }

  &:hover > svg {
    opacity: 1;
  }
`;

export const ProfileImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;

export const HideWrap = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  margin-top: 1rem;
  z-index: 1;
  right: 0;
  width: 12rem;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;

export const HideLine = styled(Link)`
  display: block;
  color: rgb(33, 37, 41);
  padding: 0.75rem 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: rgb(248, 249, 250);
  }
`;
