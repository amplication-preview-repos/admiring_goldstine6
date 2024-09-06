import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeProfileModuleBase } from "./base/employeeProfile.module.base";
import { EmployeeProfileService } from "./employeeProfile.service";
import { EmployeeProfileController } from "./employeeProfile.controller";
import { EmployeeProfileResolver } from "./employeeProfile.resolver";

@Module({
  imports: [EmployeeProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeProfileController],
  providers: [EmployeeProfileService, EmployeeProfileResolver],
  exports: [EmployeeProfileService],
})
export class EmployeeProfileModule {}
