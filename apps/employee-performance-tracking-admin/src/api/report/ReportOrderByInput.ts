import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  employeeProfileId?: SortOrder;
  generatedDate?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
