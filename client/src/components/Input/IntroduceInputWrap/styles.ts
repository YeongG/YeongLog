import styled from "styled-components";
import { IntroduceInputWrapStyle } from "./IntroduceInputWrap";

export const Container = styled.div`
  & + & {
    margin-top: 1.5rem;
  }
`;
export const NameWrap = styled.div<IntroduceInputWrapStyle>`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.mediaColumn ? "column" : "row")};
  }
`;
export const IntroduceWrap = styled.div`
  margin-top: 0.2rem;
  color: rgb(134, 142, 150);
  font-size: 1rem;
`;
export const Name = styled.div`
  width: 7rem;
  color: rgb(52, 58, 64);
  font-size: 1.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  font-weight: bolder;
`;
