import React, { FC } from "react";
import { PostItem } from "../../components";
import { GlobalDiv } from "../../GlobalStyle";
import * as S from "./styles";

const datas = [
  {
    title: "[  She++Korea ] 1기 멤버를 모집합니다. 💗🏳️‍🌈🌎",
    introduce:
      "테크기업에서 일하거나/ 일하고싶은 여성들이 모여서 서로 발전해가며 만들어가는 모임이예요",
    date: "2021년 1월 4일",
    commentCount: 10,
  },
];

const IndexPage: FC<{}> = () => {
  return (
    <GlobalDiv>
      <S.Container>
        {datas.map((data, i) => (
          <PostItem {...data} key={i} />
        ))}
      </S.Container>
    </GlobalDiv>
  );
};

export default IndexPage;
