import React, { ChangeEvent, FC, useCallback, useState } from "react";
import * as S from "./styles";

export interface EditInputStyleOption {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export interface EditInputOption extends EditInputStyleOption {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const EditInput: FC<EditInputOption> = (props) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const changeIsEditMode = useCallback(() => {
    setIsEditMode((prev) => !prev);
  }, []);

  return (
    <S.Container
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      color={props.color}
    >
      {isEditMode ? (
        <>
          <S.EditInput
            name={props.name || undefined}
            value={props.value}
            onChange={props.onChange || undefined}
          />
          <S.SaveButton onClick={changeIsEditMode}>저장</S.SaveButton>
        </>
      ) : (
        <>
          <S.ContentDiv>{props.value}</S.ContentDiv>
          <div className="link" onClick={changeIsEditMode}>
            수정
          </div>
        </>
      )}
    </S.Container>
  );
};

export default EditInput;
