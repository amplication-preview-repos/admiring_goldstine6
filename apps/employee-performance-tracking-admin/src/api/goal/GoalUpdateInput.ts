import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type GoalUpdateInput = {
  deadline?: Date | null;
  description?: string | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  milestone?: string | null;
  status?: "Option1" | null;
};
