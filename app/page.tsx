import { getClient } from "@/lib/client";
import { GET_ALL_EMPLOYEES } from "@/service/graphql";
import EmployeeList from "@/components/employeeList/EmployeeList";

export default async function Home() {
  const { data } = await getClient().query({ query: GET_ALL_EMPLOYEES });

  return (
    <main>
      <EmployeeList employeeList={data.employees} />
    </main>
  );
}
