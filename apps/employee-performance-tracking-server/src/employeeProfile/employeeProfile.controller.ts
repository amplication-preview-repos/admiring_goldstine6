import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeProfileService } from "./employeeProfile.service";
import { EmployeeProfileControllerBase } from "./base/employeeProfile.controller.base";

@swagger.ApiTags("employeeProfiles")
@common.Controller("employeeProfiles")
export class EmployeeProfileController extends EmployeeProfileControllerBase {
  constructor(
    protected readonly service: EmployeeProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
