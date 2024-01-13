import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";
import EmployeeList from "@/components/employeeList/EmployeeList";

const query = gql`
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

export default async function Home() {
  const { data } = await getClient().query({ query });

  return (
    <main>
      <EmployeeList employeeList={data.employees} />
    </main>
  );
}
