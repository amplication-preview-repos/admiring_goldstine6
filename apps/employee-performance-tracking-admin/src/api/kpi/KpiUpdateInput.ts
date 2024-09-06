import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type KpiUpdateInput = {
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  kpiName?: string | null;
  targetValue?: number | null;
  value?: number | null;
};
