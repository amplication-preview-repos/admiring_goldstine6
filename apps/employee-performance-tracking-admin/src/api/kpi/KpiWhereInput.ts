import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type KpiWhereInput = {
  employeeProfile?: EmployeeProfileWhereUniqueInput;
  id?: StringFilter;
  kpiName?: StringNullableFilter;
  targetValue?: FloatNullableFilter;
  value?: FloatNullableFilter;
};
