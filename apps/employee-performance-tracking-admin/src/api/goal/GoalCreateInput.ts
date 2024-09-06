import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type GoalCreateInput = {
  deadline?: Date | null;
  description?: string | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  milestone?: string | null;
  status?: "Option1" | null;
};
