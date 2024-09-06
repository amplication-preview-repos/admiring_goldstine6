import { PerformanceReview as TPerformanceReview } from "../api/performanceReview/PerformanceReview";

export const PERFORMANCEREVIEW_TITLE_FIELD = "id";

export const PerformanceReviewTitle = (record: TPerformanceReview): string => {
  return record.id?.toString() || String(record.id);
};
