import { UseGuards } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Ingredient } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { IngredientService } from './ingredient.service';
import { Ingredient as IngredientModel } from './models/ingredient.model';

@Resolver()
export class IngredientResolver {
  constructor(private readonly ingredientService: IngredientService) {}

  @Query(() => [IngredientModel], { nullable: 'items' })
  @UseGuards(JwtAuthGuard)
  async getIngredients(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<Ingredient[]> {
    return await this.ingredientService.getIngredients(userId);
  }
}
