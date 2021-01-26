import React, { ChangeEvent, FC, useCallback, useState } from "react";
import * as S from "./styles";

interface Props {
  value?: string;
  placeHolder?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  readOnly?: boolean;
}

const FormInput: FC<Props> = ({
  label,
  readOnly,
  placeHolder,
  value,
  onChange,
  name,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);
  return (
    <S.Container isFocus={isFocus}>
      <label>
        <h3>{label}</h3>
        <S.InputWrap>
          <input
            readOnly={readOnly}
            name={name}
            placeholder={placeHolder}
            onFocus={onFocus}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
          <S.WidthMaker>{value || placeHolder}</S.WidthMaker>
        </S.InputWrap>
      </label>
    </S.Container>
  );
};

export default FormInput;
