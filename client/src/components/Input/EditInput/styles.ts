import styled, { css } from "styled-components";
import { EditInputStyleOption } from "./EditInput";

export const EditInput = styled.input`
  border: 1px solid rgb(222, 226, 230);
  background: white;
  padding: 0.5rem;
  flex: 1;
  outline: none;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 1rem !important;
  }
`;

export const ContentDiv = styled.div``;

export const Container = styled.div<EditInputStyleOption>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ContentDiv}, ${EditInput} {
    font-size: ${(props) => props.fontSize || "normal"};
    font-weight: ${(props) => props.fontWeight || "normal"};
    color: ${(props) => props.color || "black"};
  }

  & + & {
    margin-top: 0.5rem;
  }
`;

export const SaveButton = styled.button`
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(18, 184, 134);
  color: white;
  border-radius: 4px;
  padding: 0.7rem 1.25rem;
  font-size: 1rem;
  margin-left: 1rem;
`;
