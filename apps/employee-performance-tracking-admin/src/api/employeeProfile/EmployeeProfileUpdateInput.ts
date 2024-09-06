import { FeedbackNoteUpdateManyWithoutEmployeeProfilesInput } from "./FeedbackNoteUpdateManyWithoutEmployeeProfilesInput";
import { GoalUpdateManyWithoutEmployeeProfilesInput } from "./GoalUpdateManyWithoutEmployeeProfilesInput";
import { KpiUpdateManyWithoutEmployeeProfilesInput } from "./KpiUpdateManyWithoutEmployeeProfilesInput";
import { PerformanceReviewUpdateManyWithoutEmployeeProfilesInput } from "./PerformanceReviewUpdateManyWithoutEmployeeProfilesInput";
import { ReportUpdateManyWithoutEmployeeProfilesInput } from "./ReportUpdateManyWithoutEmployeeProfilesInput";
import { TaskUpdateManyWithoutEmployeeProfilesInput } from "./TaskUpdateManyWithoutEmployeeProfilesInput";

export type EmployeeProfileUpdateInput = {
  department?: string | null;
  feedbackNotes?: FeedbackNoteUpdateManyWithoutEmployeeProfilesInput;
  goals?: GoalUpdateManyWithoutEmployeeProfilesInput;
  jobRole?: string | null;
  kpis?: KpiUpdateManyWithoutEmployeeProfilesInput;
  name?: string | null;
  performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeProfilesInput;
  reports?: ReportUpdateManyWithoutEmployeeProfilesInput;
  tasks?: TaskUpdateManyWithoutEmployeeProfilesInput;
};
