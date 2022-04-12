import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  age?: string;

  @Field()
  @IsOptional()
  isSubscribed?: string;
}
