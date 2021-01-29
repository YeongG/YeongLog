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
        <S.PostInfo>
          <S.UserLInk>
            <img src="data:image/jpeg;base64,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" />
            <S.ByText>by</S.ByText>
            <S.UserName>YeongG</S.UserName>
          </S.UserLInk>
          <S.LikeWrap>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
              ></path>
            </svg>
            <span>118</span>
          </S.LikeWrap>
        </S.PostInfo>
      </S.PostBody>
    </S.Container>
  );
};

export default PostItem;
