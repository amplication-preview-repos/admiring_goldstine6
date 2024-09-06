import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KpiModuleBase } from "./base/kpi.module.base";
import { KpiService } from "./kpi.service";
import { KpiController } from "./kpi.controller";
import { KpiResolver } from "./kpi.resolver";

@Module({
  imports: [KpiModuleBase, forwardRef(() => AuthModule)],
  controllers: [KpiController],
  providers: [KpiService, KpiResolver],
  exports: [KpiService],
})
export class KpiModule {}
