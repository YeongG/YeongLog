import React, { FC } from "react";
import { EditInput } from "../../components";
import { GlobalCenterDiv } from "../../GlobalStyle";
import * as S from "./styles";

const SettingPage: FC = () => {
  return (
    <GlobalCenterDiv>
      <S.SettingHeaderWrap>
        <S.UserImgWrap>
          <img src="data:image/png;base64,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" />
          <S.ImgBtn background="rgb(18, 184, 134)" color="white">
            이미지 업로드
          </S.ImgBtn>
          <S.ImgBtn background="white" color="rgb(18, 184, 134)">
            이미지 제거
          </S.ImgBtn>
        </S.UserImgWrap>
        <S.UserTextWrap>
          <EditInput
            color="rgb(73, 80, 87)"
            fontWeight="bold"
            fontSize="1.5rem"
          />
        </S.UserTextWrap>
      </S.SettingHeaderWrap>
    </GlobalCenterDiv>
  );
};

export default SettingPage;
