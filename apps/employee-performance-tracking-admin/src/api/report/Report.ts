import { EmployeeProfile } from "../employeeProfile/EmployeeProfile";

export type Report = {
  content: string | null;
  createdAt: Date;
  employeeProfile?: EmployeeProfile | null;
  generatedDate: Date | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
