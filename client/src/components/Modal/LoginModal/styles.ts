import styled, { keyframes } from "styled-components";

const slideIn = (px: number) => keyframes`
    0% {
        transform:translateY(${px}px);
        opacity:0;
    }
    100% {
        transform:translateY(0);
        opacity:1;
    }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(249, 249, 249, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 606px;
  height: 480px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0;
  display: flex;
  animation: ${slideIn(200)} 250ms;
`;

export const ModalLeft = styled.div`
  width: 216px;
  background: rgb(241, 243, 245);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const Welcome = styled.p`
  font-size: 1.75rem;
  margin-top: 1.5rem;
  color: rgb(73, 80, 87);
  text-align: center;
  font-weight: 600;
`;

export const ModalRight = styled.div`
  flex: 1 1 0%;
  background: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const ExitWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: rgb(134, 142, 150);
  margin-bottom: 2.25rem;
`;

export const FormWrap = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
`;

export const FormContent = styled.div``;

export const HelperRegister = styled.div`
  text-align: right;
  span + span {
    margin-left: 0.5rem;
  }
`;
