import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { EmployeeProfileTitle } from "../employeeProfile/EmployeeProfileTitle";

export const KpiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employeeProfile.id"
          reference="EmployeeProfile"
          label="EmployeeProfile"
        >
          <SelectInput optionText={EmployeeProfileTitle} />
        </ReferenceInput>
        <TextInput label="kpiName" source="kpiName" />
        <NumberInput label="targetValue" source="targetValue" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
