/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeProfileWhereUniqueInput } from "../../employeeProfile/base/EmployeeProfileWhereUniqueInput";

import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
  IsDate,
} from "class-validator";

import { Type } from "class-transformer";

@InputType()
class PerformanceReviewCreateInput {
  @ApiProperty({
    required: false,
    type: () => EmployeeProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeProfileWhereUniqueInput, {
    nullable: true,
  })
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  managerFeedback?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  overallRating?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reviewDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  selfAssessment?: string | null;
}

export { PerformanceReviewCreateInput as PerformanceReviewCreateInput };
