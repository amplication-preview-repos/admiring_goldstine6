import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { EmployeeProfileTitle } from "../employeeProfile/EmployeeProfileTitle";

export const PerformanceReviewCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employeeProfile.id"
          reference="EmployeeProfile"
          label="EmployeeProfile"
        >
          <SelectInput optionText={EmployeeProfileTitle} />
        </ReferenceInput>
        <TextInput label="managerFeedback" multiline source="managerFeedback" />
        <NumberInput label="overallRating" source="overallRating" />
        <DateTimeInput label="reviewDate" source="reviewDate" />
        <TextInput label="selfAssessment" multiline source="selfAssessment" />
      </SimpleForm>
    </Create>
  );
};
