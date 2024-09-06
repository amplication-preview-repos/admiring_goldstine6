import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformanceReviewServiceBase } from "./base/performanceReview.service.base";

@Injectable()
export class PerformanceReviewService extends PerformanceReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
