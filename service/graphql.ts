import { gql } from "@apollo/client";

export const GET_ALL_EMPLOYEES = gql`
  query Employees {
    employees {
      id
      name
      point
      position
      avatar
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
