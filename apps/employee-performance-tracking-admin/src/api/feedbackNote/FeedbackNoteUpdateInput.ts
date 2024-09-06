import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type FeedbackNoteUpdateInput = {
  content?: string | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  feedbackDate?: Date | null;
};
