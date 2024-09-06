import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReportWhereInput = {
  content?: StringNullableFilter;
  employeeProfile?: EmployeeProfileWhereUniqueInput;
  generatedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
