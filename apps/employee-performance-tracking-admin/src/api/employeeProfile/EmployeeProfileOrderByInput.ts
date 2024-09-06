import { SortOrder } from "../../util/SortOrder";

export type EmployeeProfileOrderByInput = {
  createdAt?: SortOrder;
  department?: SortOrder;
  id?: SortOrder;
  jobRole?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
