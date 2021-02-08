import styled from "styled-components";

export const Container = styled.div``;
export const NameWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
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
