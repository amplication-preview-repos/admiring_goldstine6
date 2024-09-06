import { FeedbackNoteWhereInput } from "./FeedbackNoteWhereInput";
import { FeedbackNoteOrderByInput } from "./FeedbackNoteOrderByInput";

export type FeedbackNoteFindManyArgs = {
  where?: FeedbackNoteWhereInput;
  orderBy?: Array<FeedbackNoteOrderByInput>;
  skip?: number;
  take?: number;
};
