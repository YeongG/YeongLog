import styled from "styled-components";
import { styledButton } from "../../lib/payloads/button";

export const SettingHeaderWrap = styled.div`
  height: 13.75rem;
  display: flex;
`;

export const UserImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    object-fit: cover;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: block;
    margin-bottom: 1.25rem;
  }
`;

export const ImgBtn = styled(styledButton)`
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;

  & + & {
    margin-top: 0.5rem;
    margin-left: 0;

    &:hover {
      background-color: rgb(195, 250, 232);
    }
  }
`;
