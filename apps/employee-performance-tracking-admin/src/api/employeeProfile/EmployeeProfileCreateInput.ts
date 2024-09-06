import { FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput } from "./FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput";
import { GoalCreateNestedManyWithoutEmployeeProfilesInput } from "./GoalCreateNestedManyWithoutEmployeeProfilesInput";
import { KpiCreateNestedManyWithoutEmployeeProfilesInput } from "./KpiCreateNestedManyWithoutEmployeeProfilesInput";
import { PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput } from "./PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput";
import { ReportCreateNestedManyWithoutEmployeeProfilesInput } from "./ReportCreateNestedManyWithoutEmployeeProfilesInput";
import { TaskCreateNestedManyWithoutEmployeeProfilesInput } from "./TaskCreateNestedManyWithoutEmployeeProfilesInput";

export type EmployeeProfileCreateInput = {
  department?: string | null;
  feedbackNotes?: FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput;
  goals?: GoalCreateNestedManyWithoutEmployeeProfilesInput;
  jobRole?: string | null;
  kpis?: KpiCreateNestedManyWithoutEmployeeProfilesInput;
  name?: string | null;
  performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput;
  reports?: ReportCreateNestedManyWithoutEmployeeProfilesInput;
  tasks?: TaskCreateNestedManyWithoutEmployeeProfilesInput;
};
