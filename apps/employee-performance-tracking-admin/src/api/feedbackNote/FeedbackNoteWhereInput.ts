import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FeedbackNoteWhereInput = {
  content?: StringNullableFilter;
  employeeProfile?: EmployeeProfileWhereUniqueInput;
  feedbackDate?: DateTimeNullableFilter;
  id?: StringFilter;
};
