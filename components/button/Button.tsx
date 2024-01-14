"use client";

import { IButton } from "./types";
import { useContext } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { INCREMENT_VOTE } from "@/constants";
import { AppContext } from "@/context/appContext";
import { UPDATE_EMPLOYEE } from "@/service/graphql";

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
  const [updateEmployee, { loading, error }] = useMutation(UPDATE_EMPLOYEE);
  const { dispatch } = useContext(AppContext);

  const handleUpdateEmploye = async (id: string) => {
    try {
      await updateEmployee({
        variables: { updateEmployeeId: id },
      });
      dispatch({ type: INCREMENT_VOTE, payload: id });
    } catch (error) {
      console.error("Error updating Employee:", error);
    }
  };

  const handleVote = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    handleUpdateEmploye(id);
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <ButtonWrapper onClick={handleVote}>
      <span>Oyla!</span>
    </ButtonWrapper>
  );
}

export default Button;
