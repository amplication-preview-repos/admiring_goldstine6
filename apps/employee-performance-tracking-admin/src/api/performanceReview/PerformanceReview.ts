import { EmployeeProfile } from "../employeeProfile/EmployeeProfile";

export type PerformanceReview = {
  createdAt: Date;
  employeeProfile?: EmployeeProfile | null;
  id: string;
  managerFeedback: string | null;
  overallRating: number | null;
  reviewDate: Date | null;
  selfAssessment: string | null;
  updatedAt: Date;
};
