import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeedbackNoteService } from "./feedbackNote.service";
import { FeedbackNoteControllerBase } from "./base/feedbackNote.controller.base";

@swagger.ApiTags("feedbackNotes")
@common.Controller("feedbackNotes")
export class FeedbackNoteController extends FeedbackNoteControllerBase {
  constructor(
    protected readonly service: FeedbackNoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
