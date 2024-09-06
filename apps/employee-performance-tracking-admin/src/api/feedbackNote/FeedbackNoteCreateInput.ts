import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type FeedbackNoteCreateInput = {
  content?: string | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  feedbackDate?: Date | null;
};
