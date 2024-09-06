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
import { GoalService } from "../goal.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GoalCreateInput } from "./GoalCreateInput";
import { Goal } from "./Goal";
import { GoalFindManyArgs } from "./GoalFindManyArgs";
import { GoalWhereUniqueInput } from "./GoalWhereUniqueInput";
import { GoalUpdateInput } from "./GoalUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GoalControllerBase {
  constructor(
    protected readonly service: GoalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Goal })
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGoal(@common.Body() data: GoalCreateInput): Promise<Goal> {
    return await this.service.createGoal({
      data: {
        ...data,

        employeeProfile: data.employeeProfile
          ? {
              connect: data.employeeProfile,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Goal] })
  @ApiNestedQuery(GoalFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async goals(@common.Req() request: Request): Promise<Goal[]> {
    const args = plainToClass(GoalFindManyArgs, request.query);
    return this.service.goals({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async goal(
    @common.Param() params: GoalWhereUniqueInput
  ): Promise<Goal | null> {
    const result = await this.service.goal({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGoal(
    @common.Param() params: GoalWhereUniqueInput,
    @common.Body() data: GoalUpdateInput
  ): Promise<Goal | null> {
    try {
      return await this.service.updateGoal({
        where: params,
        data: {
          ...data,

          employeeProfile: data.employeeProfile
            ? {
                connect: data.employeeProfile,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Goal })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGoal(
    @common.Param() params: GoalWhereUniqueInput
  ): Promise<Goal | null> {
    try {
      return await this.service.deleteGoal({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}