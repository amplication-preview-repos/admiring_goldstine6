import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackNoteServiceBase } from "./base/feedbackNote.service.base";

@Injectable()
export class FeedbackNoteService extends FeedbackNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
