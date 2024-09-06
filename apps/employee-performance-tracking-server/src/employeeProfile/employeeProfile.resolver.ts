import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeProfileResolverBase } from "./base/employeeProfile.resolver.base";
import { EmployeeProfile } from "./base/EmployeeProfile";
import { EmployeeProfileService } from "./employeeProfile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeProfile)
export class EmployeeProfileResolver extends EmployeeProfileResolverBase {
  constructor(
    protected readonly service: EmployeeProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
