"use client";
import styled from "styled-components";
import { GET_ALL_LOGS } from "@/service/graphql";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { ILog } from "./types";

const StyledTable = styled.table`
  width: 100%;
  caption-side: top;
  border: none;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #dddddd;
  }

  tbody tr {
    :hover {
      background-color: lightpink;
    }
    & > td {
      padding: 5px;
    }
  }
  thead {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  thead > tr {
    background-color: #c2c2c2;
    & > th {
      padding: 10px 0px;
    }
  }
`;
function Page() {
  const { data } = useSuspenseQuery<{ getLogs: ILog[] }>(GET_ALL_LOGS);

  return (
    <StyledTable>
      <thead>
        <tr>
          {Object.keys(data.getLogs[0]).map((title, key) =>
            title !== "__typename" ? <th key={key}>{title}</th> : null
          )}
        </tr>
      </thead>
      <tbody>
        {data.getLogs.map((log: any, key) => (
          <tr key={key}>
            {Object.keys(log).map((logKey: string, key) =>
              logKey !== "__typename" ? <td key={key}>{log[logKey]}</td> : null
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Page;
