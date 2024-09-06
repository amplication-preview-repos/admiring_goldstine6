import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { EmployeeProfileTitle } from "../employeeProfile/EmployeeProfileTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="completionStatus"
          label="completionStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <ReferenceInput
          source="employeeProfile.id"
          reference="EmployeeProfile"
          label="EmployeeProfile"
        >
          <SelectInput optionText={EmployeeProfileTitle} />
        </ReferenceInput>
        <TextInput label="project" source="project" />
        <TextInput label="taskName" source="taskName" />
      </SimpleForm>
    </Edit>
  );
};
