"use client";
import styled from "styled-components";

const EmployeeDetailsWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EmployeeDetailsContent = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (max-width: 768px) {
    width: 80%;
  }
`;

function EmployeeDetails({ params: { id } }: { params: { id: string } }) {
  console.log(id);
  return (
    <EmployeeDetailsWrapper>
      <EmployeeDetailsContent>EmployeeDetails</EmployeeDetailsContent>
    </EmployeeDetailsWrapper>
  );
}

export default EmployeeDetails;
