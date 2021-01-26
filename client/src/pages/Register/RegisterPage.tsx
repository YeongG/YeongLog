import React, {
  FC,
  useCallback,
  useEffect,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FormInput } from "../../components";
import qs from "querystring";
import * as S from "./styles";
import { toast } from "react-toastify";
import { ReqRegister } from "../../lib/payloads/auth";
import { checkEmail, reqRegister } from "../../lib/api/auth";

const RegisterPage: FC = () => {
  const query: string = useLocation().search;
  const history = useHistory();
  const [registerData, setRegisterData] = useState<ReqRegister>({
    introduce: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const token: string = (qs.parse(query.split("?")[1]).token as string) || "";
    if (!token) {
      history.push("/");
    }
    checkEmail(token)
      .then((res) => {
        setRegisterData((prev) => ({ ...prev, email: res.data.email }));
      })
      .catch((err) => {
        toast.dark("이메일을 새로 발급받으세요");
        history.push("/");
      });
  }, []);

  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const submitHandler = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!registerData.name) {
        toast.dark("이름을 입력해주세요");
        return;
      }
      if (!registerData.introduce) {
        toast.dark("소개를 입력해주세요");
        return;
      }
      try {
        await reqRegister(registerData);
        toast.dark("회원가입에 성공했습니다");
      } catch (err) {
        toast.dark("이미 가입된 계정입니다");
      }
      history.push("/");
    },
    [registerData]
  );

  return (
    <S.Container>
      <h1>회원가입</h1>
      <p>기본 회원 정보를 입력해 주세요</p>
      <S.FormWrap onSubmit={submitHandler}>
        <FormInput label="이메일" value={registerData.email} readOnly={true} />
        <FormInput
          label="이름"
          name="name"
          placeHolder="이름을 입력하세요"
          value={registerData.name}
          onChange={inputHandler}
        />
        <FormInput
          label="한 줄 소개"
          name="introduce"
          placeHolder="당신을 한 줄로 소개해보세요"
          value={registerData.introduce}
          onChange={inputHandler}
        />
        <S.ButtonWrap>
          <S.FormButton
            type="button"
            background="rgb(233, 236, 239)"
            color="rgb(73, 80, 87);"
          >
            취소
          </S.FormButton>
          <S.FormButton
            background="rgb(18, 184, 134)"
            type="submit"
            color="white"
          >
            다음
          </S.FormButton>
        </S.ButtonWrap>
      </S.FormWrap>
    </S.Container>
  );
};

export default RegisterPage;
