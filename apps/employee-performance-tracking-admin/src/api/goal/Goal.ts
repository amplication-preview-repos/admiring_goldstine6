import { EmployeeProfile } from "../employeeProfile/EmployeeProfile";

export type Goal = {
  createdAt: Date;
  deadline: Date | null;
  description: string | null;
  employeeProfile?: EmployeeProfile | null;
  id: string;
  milestone: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
