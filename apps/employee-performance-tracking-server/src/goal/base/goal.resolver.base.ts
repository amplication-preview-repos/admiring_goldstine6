/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Goal } from "./Goal";
import { GoalCountArgs } from "./GoalCountArgs";
import { GoalFindManyArgs } from "./GoalFindManyArgs";
import { GoalFindUniqueArgs } from "./GoalFindUniqueArgs";
import { CreateGoalArgs } from "./CreateGoalArgs";
import { UpdateGoalArgs } from "./UpdateGoalArgs";
import { DeleteGoalArgs } from "./DeleteGoalArgs";
import { EmployeeProfile } from "../../employeeProfile/base/EmployeeProfile";
import { GoalService } from "../goal.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Goal)
export class GoalResolverBase {
  constructor(
    protected readonly service: GoalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "any",
  })
  async _goalsMeta(
    @graphql.Args() args: GoalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Goal])
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "any",
  })
  async goals(@graphql.Args() args: GoalFindManyArgs): Promise<Goal[]> {
    return this.service.goals(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Goal, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "read",
    possession: "own",
  })
  async goal(@graphql.Args() args: GoalFindUniqueArgs): Promise<Goal | null> {
    const result = await this.service.goal(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Goal)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "create",
    possession: "any",
  })
  async createGoal(@graphql.Args() args: CreateGoalArgs): Promise<Goal> {
    return await this.service.createGoal({
      ...args,
      data: {
        ...args.data,

        employeeProfile: args.data.employeeProfile
          ? {
              connect: args.data.employeeProfile,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Goal)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "update",
    possession: "any",
  })
  async updateGoal(@graphql.Args() args: UpdateGoalArgs): Promise<Goal | null> {
    try {
      return await this.service.updateGoal({
        ...args,
        data: {
          ...args.data,

          employeeProfile: args.data.employeeProfile
            ? {
                connect: args.data.employeeProfile,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Goal)
  @nestAccessControl.UseRoles({
    resource: "Goal",
    action: "delete",
    possession: "any",
  })
  async deleteGoal(@graphql.Args() args: DeleteGoalArgs): Promise<Goal | null> {
    try {
      return await this.service.deleteGoal(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => EmployeeProfile, {
    nullable: true,
    name: "employeeProfile",
  })
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "read",
    possession: "any",
  })
  async getEmployeeProfile(
    @graphql.Parent() parent: Goal
  ): Promise<EmployeeProfile | null> {
    const result = await this.service.getEmployeeProfile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
