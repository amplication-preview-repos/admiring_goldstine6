import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  completionStatus?: "Option1";
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  employeeProfile?: EmployeeProfileWhereUniqueInput;
  id?: StringFilter;
  project?: StringNullableFilter;
  taskName?: StringNullableFilter;
};
