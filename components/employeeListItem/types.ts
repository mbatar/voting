export interface IEmployeeListItem {
  employee: IEmployee;
}
export interface IEmployee {
  id: string;
  name: string;
  point: number;
  position: string;
  avatar: string;
  isFirst: boolean;
  address?: string;
  phone?: string;
  email?: string;
}
