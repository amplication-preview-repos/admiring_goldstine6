/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  FeedbackNote as PrismaFeedbackNote,
  EmployeeProfile as PrismaEmployeeProfile,
} from "@prisma/client";

export class FeedbackNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FeedbackNoteCountArgs, "select">
  ): Promise<number> {
    return this.prisma.feedbackNote.count(args);
  }

  async feedbackNotes(
    args: Prisma.FeedbackNoteFindManyArgs
  ): Promise<PrismaFeedbackNote[]> {
    return this.prisma.feedbackNote.findMany(args);
  }
  async feedbackNote(
    args: Prisma.FeedbackNoteFindUniqueArgs
  ): Promise<PrismaFeedbackNote | null> {
    return this.prisma.feedbackNote.findUnique(args);
  }
  async createFeedbackNote(
    args: Prisma.FeedbackNoteCreateArgs
  ): Promise<PrismaFeedbackNote> {
    return this.prisma.feedbackNote.create(args);
  }
  async updateFeedbackNote(
    args: Prisma.FeedbackNoteUpdateArgs
  ): Promise<PrismaFeedbackNote> {
    return this.prisma.feedbackNote.update(args);
  }
  async deleteFeedbackNote(
    args: Prisma.FeedbackNoteDeleteArgs
  ): Promise<PrismaFeedbackNote> {
    return this.prisma.feedbackNote.delete(args);
  }

  async getEmployeeProfile(
    parentId: string
  ): Promise<PrismaEmployeeProfile | null> {
    return this.prisma.feedbackNote
      .findUnique({
        where: { id: parentId },
      })
      .employeeProfile();
  }
}