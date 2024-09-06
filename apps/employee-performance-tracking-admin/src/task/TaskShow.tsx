import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { EMPLOYEEPROFILE_TITLE_FIELD } from "../employeeProfile/EmployeeProfileTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="completionStatus" source="completionStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="dueDate" source="dueDate" />
        <ReferenceField
          label="EmployeeProfile"
          source="employeeprofile.id"
          reference="EmployeeProfile"
        >
          <TextField source={EMPLOYEEPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="project" source="project" />
        <TextField label="taskName" source="taskName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
