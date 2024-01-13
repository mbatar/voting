import casual from "casual";
import { gql } from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String
    point: Int
    position: String
    avatar: String
  }

  type Query {
    employees: [Employee]
  }

  type Mutation {
    updateEmployee(id: ID!, point: Int): Employee
  }
`;

const employees = [...new Array(13)].map((i) => ({
  name: casual.full_name,
  age: casual.integer(20, 45),
  point: casual.integer(0, 11),
  position: casual.random_element(["Frontend", "Backend", "Fullstack"]),
  avatar: casual.random_element([
    "https://xsgames.co/randomusers/avatar.php?g=male",
    "https://xsgames.co/randomusers/avatar.php?g=female",
  ]),
  id: casual.uuid,
}));

const resolvers = {
  Query: {
    employees: () => employees,
  },
  Mutation: {
    updateEmployee: ({ id, point }: { id: string; point: number }) => {
      const employee = employees.find((employee) => employee.id === id);
      if (!employee) {
        throw new Error("Employee not found");
      }
      employee.point = point || employee.point;
      return employee;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
