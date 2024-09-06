/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EmployeeProfileService } from "../employeeProfile.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmployeeProfileCreateInput } from "./EmployeeProfileCreateInput";
import { EmployeeProfile } from "./EmployeeProfile";
import { EmployeeProfileFindManyArgs } from "./EmployeeProfileFindManyArgs";
import { EmployeeProfileWhereUniqueInput } from "./EmployeeProfileWhereUniqueInput";
import { EmployeeProfileUpdateInput } from "./EmployeeProfileUpdateInput";
import { FeedbackNoteFindManyArgs } from "../../feedbackNote/base/FeedbackNoteFindManyArgs";
import { FeedbackNote } from "../../feedbackNote/base/FeedbackNote";
import { FeedbackNoteWhereUniqueInput } from "../../feedbackNote/base/FeedbackNoteWhereUniqueInput";
import { GoalFindManyArgs } from "../../goal/base/GoalFindManyArgs";
import { Goal } from "../../goal/base/Goal";
import { GoalWhereUniqueInput } from "../../goal/base/GoalWhereUniqueInput";
import { KpiFindManyArgs } from "../../kpi/base/KpiFindManyArgs";
import { Kpi } from "../../kpi/base/Kpi";
import { KpiWhereUniqueInput } from "../../kpi/base/KpiWhereUniqueInput";
import { PerformanceReviewFindManyArgs } from "../../performanceReview/base/PerformanceReviewFindManyArgs";
import { PerformanceReview } from "../../performanceReview/base/PerformanceReview";
import { PerformanceReviewWhereUniqueInput } from "../../performanceReview/base/PerformanceReviewWhereUniqueInput";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { TaskFindManyArgs } from "../../task/base/TaskFindManyArgs";
import { Task } from "../../task/base/Task";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmployeeProfileControllerBase {
  constructor(
    protected readonly service: EmployeeProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeProfile })
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmployeeProfile(
    @common.Body() data: EmployeeProfileCreateInput
  ): Promise<EmployeeProfile> {
    return await this.service.createEmployeeProfile({
      data: data,
      select: {
        createdAt: true,
        department: true,
        id: true,
        jobRole: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EmployeeProfile] })
  @ApiNestedQuery(EmployeeProfileFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employeeProfiles(
    @common.Req() request: Request
  ): Promise<EmployeeProfile[]> {
    const args = plainToClass(EmployeeProfileFindManyArgs, request.query);
    return this.service.employeeProfiles({
      ...args,
      select: {
        createdAt: true,
        department: true,
        id: true,
        jobRole: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmployeeProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employeeProfile(
    @common.Param() params: EmployeeProfileWhereUniqueInput
  ): Promise<EmployeeProfile | null> {
    const result = await this.service.employeeProfile({
      where: params,
      select: {
        createdAt: true,
        department: true,
        id: true,
        jobRole: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EmployeeProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmployeeProfile(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() data: EmployeeProfileUpdateInput
  ): Promise<EmployeeProfile | null> {
    try {
      return await this.service.updateEmployeeProfile({
        where: params,
        data: data,
        select: {
          createdAt: true,
          department: true,
          id: true,
          jobRole: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EmployeeProfile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmployeeProfile(
    @common.Param() params: EmployeeProfileWhereUniqueInput
  ): Promise<EmployeeProfile | null> {
    try {
      return await this.service.deleteEmployeeProfile({
        where: params,
        select: {
          createdAt: true,
          department: true,
          id: true,
          jobRole: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/feedbackNotes")
  @ApiNestedQuery(FeedbackNoteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FeedbackNote",
    action: "read",
    possession: "any",
  })
  async findFeedbackNotes(
    @common.Req() request: Request,
    @common.Param() params: EmployeeProfileWhereUniqueInput
  ): Promise<FeedbackNote[]> {
    const query = plainToClass(FeedbackNoteFindManyArgs, request.query);
    const results = await this.service.findFeedbackNotes(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,

        employeeProfile: {
          select: {
            id: true,
          },
        },

        feedbackDate: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/feedbackNotes")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async connectFeedbackNotes(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: FeedbackNoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbackNotes: {
        connect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/feedbackNotes")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async updateFeedbackNotes(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: FeedbackNoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbackNotes: {
        set: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/feedbackNotes")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async disconnectFeedbackNotes(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: FeedbackNoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbackNotes: {
        disconnect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/goals")
  @ApiNestedQuery(GoalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "any",
  })
  async findGoals(
    @common.Req() request: Request,
    @common.Param() params: EmployeeProfileWhereUniqueInput
  ): Promise<Goal[]> {
    const query = plainToClass(GoalFindManyArgs, request.query);
    const results = await this.service.findGoals(params.id, {
      ...query,
      select: {
        createdAt: true,
        deadline: true,
        description: true,

        employeeProfile: {
          select: {
            id: true,
          },
        },

        id: true,
        milestone: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/goals")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async connectGoals(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: GoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      goals: {
        connect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/goals")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async updateGoals(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: GoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      goals: {
        set: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/goals")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async disconnectGoals(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: GoalWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      goals: {
        disconnect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/kpis")
  @ApiNestedQuery(KpiFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Kpi",
    action: "read",
    possession: "any",
  })
  async findKpis(
    @common.Req() request: Request,
    @common.Param() params: EmployeeProfileWhereUniqueInput
  ): Promise<Kpi[]> {
    const query = plainToClass(KpiFindManyArgs, request.query);
    const results = await this.service.findKpis(params.id, {
      ...query,
      select: {
        createdAt: true,

        employeeProfile: {
          select: {
            id: true,
          },
        },

        id: true,
        kpiName: true,
        targetValue: true,
        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/kpis")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async connectKpis(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: KpiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      kpis: {
        connect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/kpis")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async updateKpis(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: KpiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      kpis: {
        set: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/kpis")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async disconnectKpis(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: KpiWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      kpis: {
        disconnect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/performanceReviews")
  @ApiNestedQuery(PerformanceReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PerformanceReview",
    action: "read",
    possession: "any",
  })
  async findPerformanceReviews(
    @common.Req() request: Request,
    @common.Param() params: EmployeeProfileWhereUniqueInput
  ): Promise<PerformanceReview[]> {
    const query = plainToClass(PerformanceReviewFindManyArgs, request.query);
    const results = await this.service.findPerformanceReviews(params.id, {
      ...query,
      select: {
        createdAt: true,

        employeeProfile: {
          select: {
            id: true,
          },
        },

        id: true,
        managerFeedback: true,
        overallRating: true,
        reviewDate: true,
        selfAssessment: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/performanceReviews")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async connectPerformanceReviews(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: PerformanceReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      performanceReviews: {
        connect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/performanceReviews")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async updatePerformanceReviews(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: PerformanceReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      performanceReviews: {
        set: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/performanceReviews")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async disconnectPerformanceReviews(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: PerformanceReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      performanceReviews: {
        disconnect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/reports")
  @ApiNestedQuery(ReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReports(
    @common.Req() request: Request,
    @common.Param() params: EmployeeProfileWhereUniqueInput
  ): Promise<Report[]> {
    const query = plainToClass(ReportFindManyArgs, request.query);
    const results = await this.service.findReports(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,

        employeeProfile: {
          select: {
            id: true,
          },
        },

        generatedDate: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async connectReports(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        connect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async updateReports(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        set: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async disconnectReports(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        disconnect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/tasks")
  @ApiNestedQuery(TaskFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "any",
  })
  async findTasks(
    @common.Req() request: Request,
    @common.Param() params: EmployeeProfileWhereUniqueInput
  ): Promise<Task[]> {
    const query = plainToClass(TaskFindManyArgs, request.query);
    const results = await this.service.findTasks(params.id, {
      ...query,
      select: {
        completionStatus: true,
        createdAt: true,
        description: true,
        dueDate: true,

        employeeProfile: {
          select: {
            id: true,
          },
        },

        id: true,
        project: true,
        taskName: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tasks")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async connectTasks(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        connect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tasks")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async updateTasks(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        set: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tasks")
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "update",
    possession: "any",
  })
  async disconnectTasks(
    @common.Param() params: EmployeeProfileWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        disconnect: body,
      },
    };
    await this.service.updateEmployeeProfile({
      where: params,
      data,
      select: { id: true },
    });
  }
}
