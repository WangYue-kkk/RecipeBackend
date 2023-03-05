import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ingredient {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
