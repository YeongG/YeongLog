import React, { FC } from "react";
import * as S from "./styles";

export interface IntroduceInputWrapStyle {
  mediaColumn?: boolean;
}

interface Props extends IntroduceInputWrapStyle {
  name: string;
  introduce: string;
}

const IntroduceInputWrap: FC<Props> = ({
  mediaColumn,
  name,
  children,
  introduce,
}) => {
  return (
    <S.Container>
      <S.NameWrap mediaColumn={mediaColumn}>
        <S.Name>{name}</S.Name>
        {children}
      </S.NameWrap>
      <S.IntroduceWrap>{introduce}</S.IntroduceWrap>
    </S.Container>
  );
};

export default IntroduceInputWrap;
