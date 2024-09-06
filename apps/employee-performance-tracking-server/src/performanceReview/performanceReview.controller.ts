import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PerformanceReviewService } from "./performanceReview.service";
import { PerformanceReviewControllerBase } from "./base/performanceReview.controller.base";

@swagger.ApiTags("performanceReviews")
@common.Controller("performanceReviews")
export class PerformanceReviewController extends PerformanceReviewControllerBase {
  constructor(
    protected readonly service: PerformanceReviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
