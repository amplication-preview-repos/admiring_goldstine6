import { PerformanceReviewWhereInput } from "./PerformanceReviewWhereInput";
import { PerformanceReviewOrderByInput } from "./PerformanceReviewOrderByInput";

export type PerformanceReviewFindManyArgs = {
  where?: PerformanceReviewWhereInput;
  orderBy?: Array<PerformanceReviewOrderByInput>;
  skip?: number;
  take?: number;
};
