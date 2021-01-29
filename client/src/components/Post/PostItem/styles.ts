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

  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
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
export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;

  > * {
    display: flex;
    align-items: center;
  }
`;

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

export const UserLInk = styled.a`
  img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
  }
  > span {
    margin-left: 0.3rem;
  }
`;
export const LikeWrap = styled.div`
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
  span {
    margin-left: 0.5rem;
  }
`;

export const ByText = styled.span`
  color: rgb(134, 142, 150);
`;

export const UserName = styled.span`
  color: rgb(52, 58, 64);
  font-weight: bold;
`;
