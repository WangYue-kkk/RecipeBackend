import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Ingredient, RecipeType } from '@prisma/client';
import { Ingredient as IngredientModel } from '../../ingredient/models/ingredient.model';

@ObjectType()
export class Recipe {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field({ nullable: true })
  steps: string;

  @Field()
  type: RecipeType;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [IngredientModel])
  ingredients?: Ingredient[];
}
