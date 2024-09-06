import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type PerformanceReviewUpdateInput = {
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  managerFeedback?: string | null;
  overallRating?: number | null;
  reviewDate?: Date | null;
  selfAssessment?: string | null;
};
