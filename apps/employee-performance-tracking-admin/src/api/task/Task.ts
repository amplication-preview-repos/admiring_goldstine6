import { EmployeeProfile } from "../employeeProfile/EmployeeProfile";

export type Task = {
  completionStatus?: "Option1" | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  employeeProfile?: EmployeeProfile | null;
  id: string;
  project: string | null;
  taskName: string | null;
  updatedAt: Date;
};
