import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type ReportUpdateInput = {
  content?: string | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  generatedDate?: Date | null;
  title?: string | null;
};
