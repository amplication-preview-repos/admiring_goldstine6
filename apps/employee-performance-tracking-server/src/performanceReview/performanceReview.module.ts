import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PerformanceReviewModuleBase } from "./base/performanceReview.module.base";
import { PerformanceReviewService } from "./performanceReview.service";
import { PerformanceReviewController } from "./performanceReview.controller";
import { PerformanceReviewResolver } from "./performanceReview.resolver";

@Module({
  imports: [PerformanceReviewModuleBase, forwardRef(() => AuthModule)],
  controllers: [PerformanceReviewController],
  providers: [PerformanceReviewService, PerformanceReviewResolver],
  exports: [PerformanceReviewService],
})
export class PerformanceReviewModule {}
