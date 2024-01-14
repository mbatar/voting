"use client";

import { IButton } from "./types";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { GET_ALL_EMPLOYEES, UPDATE_EMPLOYEE } from "@/app/service/graphql";

const ButtonWrapper = styled.div`
  width: 80%;
  position: relative;
  height: 40px;
  padding: 0px 40px;
`;

const ButtonComponent = styled.button`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #81be83;
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
  @media (min-width: 768px) {
    &:active {
      background-color: #81be8320;
      border: 1px solid #81be8320;
      color: #81be83;
    }
    &:hover:not(:active) {
      background-color: #81be83;
      border: 1px solid #81be83;
      color: #fff;
    }
  }
`;

function Button({ id }: IButton) {
  const [updateEmployee, { loading }] = useMutation(UPDATE_EMPLOYEE, {
    refetchQueries: [GET_ALL_EMPLOYEES],
  });

  const handleUpdateEmploye = async (id: string) => {
    try {
      await updateEmployee({
        variables: { updateEmployeeId: id },
      });
    } catch (error) {
      console.error("Error updating Employee:", error);
    }
  };

  const handleVote = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    handleUpdateEmploye(id);
  };

  {
    /*
  if (error) return `Submission error! ${error.message}`; */
  }

  return (
    <ButtonWrapper>
      <ButtonComponent onClick={handleVote} disabled={loading}>
        Vote!
      </ButtonComponent>
    </ButtonWrapper>
  );
}

export default Button;
