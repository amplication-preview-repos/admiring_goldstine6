import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FeedbackNoteResolverBase } from "./base/feedbackNote.resolver.base";
import { FeedbackNote } from "./base/FeedbackNote";
import { FeedbackNoteService } from "./feedbackNote.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FeedbackNote)
export class FeedbackNoteResolver extends FeedbackNoteResolverBase {
  constructor(
    protected readonly service: FeedbackNoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
