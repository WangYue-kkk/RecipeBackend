import { Field, InputType, Int } from '@nestjs/graphql';
import { Ingredient, RecipeType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { CreateIngredientInput } from 'src/ingredient/dto/createIngredient.input';

@InputType()
export class UpdateRecipeInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @Field({ nullable: true })
  @IsEnum(RecipeType)
  @IsOptional()
  type?: RecipeType;

  @Field({ nullable: true })
  steps?: string;

  @Field(() => [CreateIngredientInput], { nullable: true })
  ingredients?: Ingredient[];
}
