import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEEPROFILE_TITLE_FIELD } from "../employeeProfile/EmployeeProfileTitle";

export const PerformanceReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PerformanceReviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EmployeeProfile"
          source="employeeprofile.id"
          reference="EmployeeProfile"
        >
          <TextField source={EMPLOYEEPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="managerFeedback" source="managerFeedback" />
        <TextField label="overallRating" source="overallRating" />
        <TextField label="reviewDate" source="reviewDate" />
        <TextField label="selfAssessment" source="selfAssessment" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
