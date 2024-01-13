"use client";

import styled from "styled-components";
import { IButton } from "./types";

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0px 60px;
  & > span {
    transition: all 0.2s ease-in-out;
    color: #81be83;
    width: 100%;
    padding: 12px;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: #81be8320;
    border: 1px solid #81be8320;
    font-weight: 700;
    @media (max-width: 768px) {
      padding: 16px;
    }
    &:hover {
      background-color: #81be83;
      border: 1px solid #81be83;
      color: #fff;
    }
  }
`;
function Button({ id }: IButton) {
  const handleVote = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <ButtonWrapper onClick={handleVote}>
      <span>Oyla!</span>
    </ButtonWrapper>
  );
}

export default Button;
