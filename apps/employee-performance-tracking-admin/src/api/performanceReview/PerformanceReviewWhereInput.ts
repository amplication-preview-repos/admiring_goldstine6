import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PerformanceReviewWhereInput = {
  employeeProfile?: EmployeeProfileWhereUniqueInput;
  id?: StringFilter;
  managerFeedback?: StringNullableFilter;
  overallRating?: FloatNullableFilter;
  reviewDate?: DateTimeNullableFilter;
  selfAssessment?: StringNullableFilter;
};
