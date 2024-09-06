import { EmployeeProfile } from "../employeeProfile/EmployeeProfile";

export type FeedbackNote = {
  content: string | null;
  createdAt: Date;
  employeeProfile?: EmployeeProfile | null;
  feedbackDate: Date | null;
  id: string;
  updatedAt: Date;
};
