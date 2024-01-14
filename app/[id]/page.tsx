"use client";

import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "@/context/appContext";

const EmployeeDetailsWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmployeeInfoWrapper = styled.div`
  gap: 1rem;
  padding: 90px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EmployeeDetailsContent = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const ImageWrapper = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  width: 100%;
  height: 200px;
  background-color: #81be8320;
  position: relative;
  & > img {
    position: absolute;
    left: 50%;
    bottom: -90px;
    transform: translateX(-50%);
    border-radius: 100%;
  }
`;

function EmployeeDetails({ params: { id } }: { params: { id: string } }) {
  const { state } = useContext(AppContext);
  const employee = state.employees.find((employee) => employee.id === id);
  return (
    <EmployeeDetailsWrapper>
      <EmployeeDetailsContent>
        <ImageWrapper>
          {employee?.avatar && (
            <Image
              src={employee?.avatar}
              width={180}
              height={180}
              alt={employee?.name}
            />
          )}
        </ImageWrapper>
        <EmployeeInfoWrapper>
          <h1>{employee?.name}</h1>
          <h2>{employee?.position}</h2>
          <h2>{employee?.point}</h2>
        </EmployeeInfoWrapper>
      </EmployeeDetailsContent>
    </EmployeeDetailsWrapper>
  );
}

export default EmployeeDetails;
