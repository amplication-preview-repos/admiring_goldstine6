import { EmployeeProfile as TEmployeeProfile } from "../api/employeeProfile/EmployeeProfile";

export const EMPLOYEEPROFILE_TITLE_FIELD = "name";

export const EmployeeProfileTitle = (record: TEmployeeProfile): string => {
  return record.name?.toString() || String(record.id);
};
