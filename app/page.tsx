import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

import Image from "next/image";

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
      {data.employees.map((employee: any, key: any) => (
        <div key={key}>
          <Image
            src={employee.avatar}
            alt={employee.name}
            width={500}
            height={500}
          />
          {employee.name}
          {employee.point}
          {employee.position}
        </div>
      ))}
    </main>
  );
}
