import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginModalState } from "../../../modules/actions/loginModal";
import { Store } from "../../../modules/reducers";
import * as S from "./styles";

const LoginModal: FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store: Store) => store.loginModal.isOpen);

  const closeModal = useCallback(() => {
    dispatch(changeLoginModalState(false));
  }, []);

  return (
    isOpen && (
      <S.Background>
        <S.Modal>
          <S.ModalLeft>
            <div>
              <img src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg" />
              <S.Welcome>환영합니다!</S.Welcome>
            </div>
          </S.ModalLeft>
          <S.ModalRight>
            <S.ExitWrap>
              <svg
                onClick={closeModal}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </S.ExitWrap>
            <S.FormWrap>
              <S.FormContent></S.FormContent>
              <S.HelperRegister>
                <span>아직 회원이 아니신가요?</span>
                <span className="link">회원가입</span>
              </S.HelperRegister>
            </S.FormWrap>
          </S.ModalRight>
        </S.Modal>
      </S.Background>
    )
  );
};

export default LoginModal;
