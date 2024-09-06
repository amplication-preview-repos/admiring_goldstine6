import { SortOrder } from "../../util/SortOrder";

export type PerformanceReviewOrderByInput = {
  createdAt?: SortOrder;
  employeeProfileId?: SortOrder;
  id?: SortOrder;
  managerFeedback?: SortOrder;
  overallRating?: SortOrder;
  reviewDate?: SortOrder;
  selfAssessment?: SortOrder;
  updatedAt?: SortOrder;
};
