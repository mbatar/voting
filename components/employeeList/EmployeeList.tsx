"use client";

import styled from "styled-components";
import { IEmployeeList } from "./types";
import { FILL_EMPLOYEES } from "@/constants";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/appContext";
import { IEmployee } from "../employeeListItem/types";
import EmployeeListItem from "../employeeListItem/EmployeeListItem";

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

function EmployeeList({ employeeList }: IEmployeeList) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: FILL_EMPLOYEES, payload: employeeList });
  }, [employeeList, dispatch]);

  function compareByPoint(a: IEmployee, b: IEmployee) {
    return b.point - a.point;
  }

  const sortedEmployees = state.employees.sort(compareByPoint);

  return (
    <EmployeeListWrapper>
      {sortedEmployees.map((employee: any, key: any) => (
        <EmployeeListItem key={key} employee={employee} />
      ))}
    </EmployeeListWrapper>
  );
}

export default EmployeeList;
