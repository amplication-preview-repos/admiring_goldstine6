import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KpiService } from "./kpi.service";
import { KpiControllerBase } from "./base/kpi.controller.base";

@swagger.ApiTags("kpis")
@common.Controller("kpis")
export class KpiController extends KpiControllerBase {
  constructor(
    protected readonly service: KpiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
