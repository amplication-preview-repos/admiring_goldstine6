import { SortOrder } from "../../util/SortOrder";

export type KpiOrderByInput = {
  createdAt?: SortOrder;
  employeeProfileId?: SortOrder;
  id?: SortOrder;
  kpiName?: SortOrder;
  targetValue?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
