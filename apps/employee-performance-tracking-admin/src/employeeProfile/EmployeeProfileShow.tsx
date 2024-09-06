import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EMPLOYEEPROFILE_TITLE_FIELD } from "./EmployeeProfileTitle";

export const EmployeeProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="department" source="department" />
        <TextField label="ID" source="id" />
        <TextField label="jobRole" source="jobRole" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FeedbackNote"
          target="employeeProfileId"
          label="FeedbackNotes"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeProfile"
              source="employeeprofile.id"
              reference="EmployeeProfile"
            >
              <TextField source={EMPLOYEEPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="feedbackDate" source="feedbackDate" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Goal"
          target="employeeProfileId"
          label="Goals"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="deadline" source="deadline" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="EmployeeProfile"
              source="employeeprofile.id"
              reference="EmployeeProfile"
            >
              <TextField source={EMPLOYEEPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="milestone" source="milestone" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Kpi"
          target="employeeProfileId"
          label="KPIS"
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
            <TextField label="kpiName" source="kpiName" />
            <TextField label="targetValue" source="targetValue" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PerformanceReview"
          target="employeeProfileId"
          label="PerformanceReviews"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Report"
          target="employeeProfileId"
          label="Reports"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeProfile"
              source="employeeprofile.id"
              reference="EmployeeProfile"
            >
              <TextField source={EMPLOYEEPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="generatedDate" source="generatedDate" />
            <TextField label="ID" source="id" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Task"
          target="employeeProfileId"
          label="Tasks"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
