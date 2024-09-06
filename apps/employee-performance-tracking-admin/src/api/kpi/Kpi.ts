import { EmployeeProfile } from "../employeeProfile/EmployeeProfile";

export type Kpi = {
  createdAt: Date;
  employeeProfile?: EmployeeProfile | null;
  id: string;
  kpiName: string | null;
  targetValue: number | null;
  updatedAt: Date;
  value: number | null;
};
