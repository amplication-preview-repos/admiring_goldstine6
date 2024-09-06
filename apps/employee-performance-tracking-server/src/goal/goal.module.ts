import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GoalModuleBase } from "./base/goal.module.base";
import { GoalService } from "./goal.service";
import { GoalController } from "./goal.controller";
import { GoalResolver } from "./goal.resolver";

@Module({
  imports: [GoalModuleBase, forwardRef(() => AuthModule)],
  controllers: [GoalController],
  providers: [GoalService, GoalResolver],
  exports: [GoalService],
})
export class GoalModule {}
