import slug from "slug";
import casual from "casual";
import { gql } from "graphql-tag";
import { ILog } from "@/app/appLogs/types";
import { ApolloServer } from "@apollo/server";
import { IEmployee } from "@/components/employeeListItem/types";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginCacheControlDisabled } from "@apollo/server/plugin/disabled";

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String
    point: Int
    position: String
    avatar: String
    isFirst: Boolean
    email: String
    address: String
    phone: String
  }

  type Log {
    type: String
    name: String
    variables: String
    message: String
  }

  type Query {
    getAllEmployees: [Employee]
    getEmployeeById(id: ID!): Employee
    getLogs: [Log]
  }

  type Mutation {
    updateEmployee(id: ID!): Employee
  }
`;
const logs: ILog[] = [];
const employees = [...new Array(13)]
  .map((i) => {
    const name = casual.full_name;
    return {
      id: slug(name),
      name,
      email: casual.email,
      address: casual.address1,
      phone: casual.phone,
      point: casual.integer(0, 11),
      position: casual.random_element([
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
      ]),
      avatar: casual.random_element([
        "https://xsgames.co/randomusers/avatar.php?g=male",
        "https://xsgames.co/randomusers/avatar.php?g=female",
      ]),
      isFirst: false,
    };
  })
  .sort((a, b) => b.point - a.point)
  .map((employee, index) => ({ ...employee, isFirst: index === 0 }));

const resolvers = {
  Query: {
    getAllEmployees: () =>
      employees
        .sort((a, b) => b.point - a.point)
        .map((employee, index) => ({ ...employee, isFirst: index === 0 })),
    getEmployeeById: (parent: IEmployee, { id }: { id: string }) =>
      employees.find((employee) => employee.id === id),
    getLogs: () => logs,
  },
  Mutation: {
    updateEmployee: (parent: IEmployee, { id }: { id: string }) => {
      const employee = employees.find((employee) => employee.id === id);
      if (!employee) {
        throw new Error("Employee not found");
      }

      employee.isFirst =
        [...employees].sort((a, b) => b.point - a.point)[0].point ===
        employee.point;
      employee.point = employee.point + 1;

      return employee;
    },
  },
};
const LOGGING: any = {
  async requestDidStart(requestContext: any) {
    logs.push({
      type: "request",
      name: requestContext.request.operationName,
      variables: JSON.stringify(requestContext.request.variables),
      message: "request started",
    });
    return {
      didEncounterErrors(requestContext: any) {
        logs.push({
          type: "error",
          name: requestContext.request.operationName,
          variables: JSON.stringify(requestContext.request.variables),
          message: requestContext.errors[0].message,
        });
      },
    };
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginCacheControlDisabled(), LOGGING],
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
