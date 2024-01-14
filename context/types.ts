import { IEmployee } from "@/components/employeeListItem/types";

export interface AppStateType {
  employees: IEmployee[];
}

export interface AppStateActionType {
  type: string;
  payload: any;
}
