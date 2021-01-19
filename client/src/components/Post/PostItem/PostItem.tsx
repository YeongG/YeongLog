import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  title: string;
  introduce: string;
  date: string;
  commentCount: number;
  writerProfileImg?: string;
  writerUserName?: string;
  likeCount?: number;
}

const PostItem: FC<Props> = ({
  commentCount,
  date,
  introduce,
  likeCount,
  title,
  writerProfileImg,
  writerUserName,
}) => {
  return (
    <S.Container>
      <S.PostHeader>
        <img src="https://media.vlpt.us/images/yeseolee/post/bc27a294-86cd-4be7-93ef-e4e295a9fcf8/%EC%98%88%EC%8B%9C%EC%BD%94%EB%93%9C-%ED%9A%8C%EC%83%89.png?w=640" />
      </S.PostHeader>
      <S.PostBody>
        <S.ContentInfo>
          <S.Title>{title}</S.Title>
          <S.Introduce>{introduce}</S.Introduce>
        </S.ContentInfo>
        <S.DateInfo>
          {date} {commentCount}개의 댓글
        </S.DateInfo>
        <S.PostInfo></S.PostInfo>
      </S.PostBody>
    </S.Container>
  );
};

export default PostItem;
