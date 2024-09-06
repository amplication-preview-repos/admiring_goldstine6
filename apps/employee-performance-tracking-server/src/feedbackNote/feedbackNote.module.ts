import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeedbackNoteModuleBase } from "./base/feedbackNote.module.base";
import { FeedbackNoteService } from "./feedbackNote.service";
import { FeedbackNoteController } from "./feedbackNote.controller";
import { FeedbackNoteResolver } from "./feedbackNote.resolver";

@Module({
  imports: [FeedbackNoteModuleBase, forwardRef(() => AuthModule)],
  controllers: [FeedbackNoteController],
  providers: [FeedbackNoteService, FeedbackNoteResolver],
  exports: [FeedbackNoteService],
})
export class FeedbackNoteModule {}
