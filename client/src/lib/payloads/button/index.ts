import styled, { css } from "styled-components";

export interface StyledButton {
  border?: string;
  background?: string;
  color?: string;
}

export const styledButton = styled.button<StyledButton>`
  background-color: ${({ background }) => background || "transparent"};
  border: ${({ border }) => (border ? `1px solid ${border}` : "none")};
  color: ${({ color }) => color || "inherit"};
  transition: 125ms all;

  & + & {
    margin-left: 1rem;
  }
`;
