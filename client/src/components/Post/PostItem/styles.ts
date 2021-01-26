import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px;
  background: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  transition: all 300ms;
  overflow: hidden;
  border-radius: 0.5rem;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const PostHeader = styled.div`
  height: 10rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;
export const PostBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const DateInfo = styled.div`
  color: rgb(134, 142, 150);
  font-size: 0.75rem;
  margin: 20px 0;
`;
export const ContentInfo = styled.div`
  color: unset;
  text-decoration: none;
  flex: 1;
`;
export const PostInfo = styled.div``;

export const Title = styled.div`
  font-weight: bolder;
  margin-bottom: 7px;
  color: rgb(33, 37, 41);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Introduce = styled.div`
  font-size: 0.9rem;
  flex: 1;
  height: 4rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
