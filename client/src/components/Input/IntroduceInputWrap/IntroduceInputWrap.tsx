import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  name: string;
  introduce: string;
}

const IntroduceInputWrap: FC<Props> = ({ name, children, introduce }) => {
  return (
    <S.Container>
      <S.NameWrap>
        <S.Name>{name}</S.Name>
        {children}
      </S.NameWrap>
      <S.IntroduceWrap>{introduce}</S.IntroduceWrap>
    </S.Container>
  );
};

export default IntroduceInputWrap;
