import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type KpiCreateInput = {
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  kpiName?: string | null;
  targetValue?: number | null;
  value?: number | null;
};
