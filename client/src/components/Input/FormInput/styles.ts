import styled, { css } from "styled-components";

export const Container = styled.div<{ isFocus: boolean }>`
  input {
    padding-bottom: 0.5rem;
    border: none;
    outline: none;
    border-bottom: 1px solid rgb(73, 80, 87);
    font-size: 1.5rem;
    background-color: transparent;
    width: 100%;
  }

  ${(props) => {
    const color = `rgb(12, 166, 120)`;
    return (
      props.isFocus &&
      css`
        color: ${color};

        input {
          color: ${color};
          border-bottom: 1px solid ${color};
        }
      `
    );
  }}
`;
export const InputWrap = styled.div`
  display: inline-block;
  max-width: 100%;
`;

export const WidthMaker = styled.div`
  font-size: 1.65rem;
  visibility: hidden;
`;
