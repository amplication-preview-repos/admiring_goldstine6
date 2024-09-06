import { EmployeeProfileWhereInput } from "./EmployeeProfileWhereInput";
import { EmployeeProfileOrderByInput } from "./EmployeeProfileOrderByInput";

export type EmployeeProfileFindManyArgs = {
  where?: EmployeeProfileWhereInput;
  orderBy?: Array<EmployeeProfileOrderByInput>;
  skip?: number;
  take?: number;
};
