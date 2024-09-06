import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeProfileServiceBase } from "./base/employeeProfile.service.base";

@Injectable()
export class EmployeeProfileService extends EmployeeProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
