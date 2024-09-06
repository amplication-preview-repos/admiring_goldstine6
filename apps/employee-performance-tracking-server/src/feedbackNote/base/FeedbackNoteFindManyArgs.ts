/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FeedbackNoteWhereInput } from "./FeedbackNoteWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FeedbackNoteOrderByInput } from "./FeedbackNoteOrderByInput";

@ArgsType()
class FeedbackNoteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FeedbackNoteWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FeedbackNoteWhereInput, { nullable: true })
  @Type(() => FeedbackNoteWhereInput)
  where?: FeedbackNoteWhereInput;

  @ApiProperty({
    required: false,
    type: [FeedbackNoteOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FeedbackNoteOrderByInput], { nullable: true })
  @Type(() => FeedbackNoteOrderByInput)
  orderBy?: Array<FeedbackNoteOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FeedbackNoteFindManyArgs as FeedbackNoteFindManyArgs };
