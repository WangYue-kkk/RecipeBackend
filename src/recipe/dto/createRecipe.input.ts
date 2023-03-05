import { Field, InputType, Int } from '@nestjs/graphql';
import { Ingredient, RecipeType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { CreateIngredientInput } from '../../ingredient/dto/createIngredient.input';

@InputType()
export class CreateRecipeInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsEnum(RecipeType)
  type: RecipeType;

  @Field()
  @IsUrl()
  imageUrl: string;

  @Field({ nullable: true })
  @IsString()
  steps?: string;

  @Field(() => Int)
  userId: number;

  @Field(() => [CreateIngredientInput], { nullable: true })
  ingredients?: Ingredient[];
}
