import { FeedbackNote as TFeedbackNote } from "../api/feedbackNote/FeedbackNote";

export const FEEDBACKNOTE_TITLE_FIELD = "id";

export const FeedbackNoteTitle = (record: TFeedbackNote): string => {
  return record.id?.toString() || String(record.id);
};
