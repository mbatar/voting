import { gql } from "@apollo/client";

export const GET_ALL_EMPLOYEES = gql`
  query GetAllEmployees {
    getAllEmployees {
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
  query GetEmployeeById($getEmployeeByIdId: ID!) {
    getEmployeeById(id: $getEmployeeByIdId) {
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
