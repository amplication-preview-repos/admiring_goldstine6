import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeProfileTitle } from "../employeeProfile/EmployeeProfileTitle";

export const GoalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="deadline" source="deadline" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="employeeProfile.id"
          reference="EmployeeProfile"
          label="EmployeeProfile"
        >
          <SelectInput optionText={EmployeeProfileTitle} />
        </ReferenceInput>
        <TextInput label="milestone" source="milestone" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
