import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type GoalWhereInput = {
  deadline?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  employeeProfile?: EmployeeProfileWhereUniqueInput;
  id?: StringFilter;
  milestone?: StringNullableFilter;
  status?: "Option1";
};
