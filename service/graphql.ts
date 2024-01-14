import { gql } from "@apollo/client";

export const GET_ALL_EMPLOYEES = gql`
  query Employees {
    employees {
      id
      name
      point
      position
      avatar
      isFirst
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query Employee($employeeId: ID!) {
    employee(id: $employeeId) {
      id
      name
      email
      address
      phone
      point
      position
      avatar
      isFirst
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($updateEmployeeId: ID!) {
    updateEmployee(id: $updateEmployeeId) {
      point
    }
  }
`;
