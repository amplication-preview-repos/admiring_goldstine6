import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type TaskCreateInput = {
  completionStatus?: "Option1" | null;
  description?: string | null;
  dueDate?: Date | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  project?: string | null;
  taskName?: string | null;
};
