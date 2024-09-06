import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { EmployeeProfileTitle } from "../employeeProfile/EmployeeProfileTitle";

export const PerformanceReviewEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="managerFeedback" multiline source="managerFeedback" />
        <NumberInput label="overallRating" source="overallRating" />
        <DateTimeInput label="reviewDate" source="reviewDate" />
        <TextInput label="selfAssessment" multiline source="selfAssessment" />
      </SimpleForm>
    </Edit>
  );
};
