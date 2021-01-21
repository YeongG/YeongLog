import { Link } from "react-router-dom";
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

  @media (max-width: 768px) {
    flex: 1;
    height: 100%;

    > div:nth-child(1) {
      display: none;
    }
  }
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

export const ModalTitle = styled.h2`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
`;

export const SubContentWrap = styled.div`
  & + & {
    margin-top: 2.5rem;
  }
`;
export const SubTitle = styled.h4`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: rgb(134, 142, 150);
`;
export const SuccessMessage = styled.div`
  flex: 1;
  height: 100%;
  background-color: rgb(195, 250, 232);
  border: 1px solid rgb(150, 242, 215);
  color: rgb(12, 166, 120);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  height: 3rem;

  input {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid rgb(222, 226, 230);
    border-right: none;
    flex: 1;
  }

  button {
    background: rgb(18, 184, 134);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 6rem;
  }
`;

export const SnsIcon = styled(Link)<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  border: 1px solid rgb(222, 226, 230);
`;

export const SnsWrap = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
`;
