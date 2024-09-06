import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type ReportCreateInput = {
  content?: string | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  generatedDate?: Date | null;
  title?: string | null;
};
