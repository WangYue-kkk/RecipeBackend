import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Recipe } from '@prisma/client';
import { type } from 'os';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateRecipeInput } from './dto/createRecipe.input';
import { UpdateRecipeInput } from './dto/updateRecipe.input';
import { Recipe as RecipeModel } from './models/recipe.model';
import { RecipeService } from './recipe.service';

@Resolver()
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query(() => [RecipeModel], { nullable: 'items' })
  @UseGuards(JwtAuthGuard)
  async getRecipes(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<Recipe[]> {
    return await this.recipeService.getRecipes(userId);
  }

  @Mutation(() => RecipeModel)
  @UseGuards(JwtAuthGuard)
  async createRecipe(
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
  ): Promise<Recipe> {
    return await this.recipeService.createRecipe(createRecipeInput);
  }

  @Mutation(() => RecipeModel)
  @UseGuards(JwtAuthGuard)
  async updateRecipe(
    @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput,
  ): Promise<Recipe> {
    return await this.recipeService.updateRecipe(updateRecipeInput);
  }

  @Mutation(() => RecipeModel)
  @UseGuards(JwtAuthGuard)
  async deleteRecipe(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Recipe> {
    return await this.recipeService.deleteRecipe(id);
  }
}
