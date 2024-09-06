import { SortOrder } from "../../util/SortOrder";

export type GoalOrderByInput = {
  createdAt?: SortOrder;
  deadline?: SortOrder;
  description?: SortOrder;
  employeeProfileId?: SortOrder;
  id?: SortOrder;
  milestone?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
