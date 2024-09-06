import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  completionStatus?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  employeeProfileId?: SortOrder;
  id?: SortOrder;
  project?: SortOrder;
  taskName?: SortOrder;
  updatedAt?: SortOrder;
};
