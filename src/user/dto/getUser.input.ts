import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class GetUserInput {
  @Field()
  @IsEmail()
  email: string;
}
