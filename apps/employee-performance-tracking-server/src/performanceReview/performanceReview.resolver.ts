import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PerformanceReviewResolverBase } from "./base/performanceReview.resolver.base";
import { PerformanceReview } from "./base/PerformanceReview";
import { PerformanceReviewService } from "./performanceReview.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PerformanceReview)
export class PerformanceReviewResolver extends PerformanceReviewResolverBase {
  constructor(
    protected readonly service: PerformanceReviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
