"use client";

import styled from "styled-components";
import { IEmployee } from "../employeeListItem/types";
import EmployeeListItem from "../employeeListItem/EmployeeListItem";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_EMPLOYEES } from "@/service/graphql";

const EmployeeListWrapper = styled.div`
  gap: 1rem;
  display: grid;
  padding: 40px 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

function EmployeeList() {
  const { data } = useSuspenseQuery<{ employees: IEmployee[] }>(
    GET_ALL_EMPLOYEES
  );

  function compareByPoint(a: IEmployee, b: IEmployee) {
    return b.point - a.point;
  }

  if (!data.employees.length) return "loading...";

  const sortedEmployees = [...data.employees].sort(compareByPoint);

  return (
    <EmployeeListWrapper>
      {sortedEmployees.map((employee: any, key: any) => (
        <EmployeeListItem key={key} employee={employee} />
      ))}
    </EmployeeListWrapper>
  );
}

export default EmployeeList;
