import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateIngredientInput {
  @Field(() => Int)
  id: number;
}
