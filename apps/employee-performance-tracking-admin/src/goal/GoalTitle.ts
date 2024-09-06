import { Goal as TGoal } from "../api/goal/Goal";

export const GOAL_TITLE_FIELD = "milestone";

export const GoalTitle = (record: TGoal): string => {
  return record.milestone?.toString() || String(record.id);
};
