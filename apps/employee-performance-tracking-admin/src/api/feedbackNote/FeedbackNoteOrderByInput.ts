import { SortOrder } from "../../util/SortOrder";

export type FeedbackNoteOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  employeeProfileId?: SortOrder;
  feedbackDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
