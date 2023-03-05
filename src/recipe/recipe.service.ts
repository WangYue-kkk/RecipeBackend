import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { Recipe } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipeInput } from './dto/createRecipe.input';
import { UpdateRecipeInput } from './dto/updateRecipe.input';

@Injectable()
export class RecipeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getRecipes(userId: number): Promise<Recipe[]> {
    return await this.prismaService.recipe.findMany({
      where: { userId },
      include: {
        ingredients: true,
      },
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });
  }

  async createRecipe(createRecipeInput: CreateRecipeInput): Promise<Recipe> {
    const { name, type, imageUrl, steps, userId, ingredients } =
      createRecipeInput;
    console.log(ingredients);
    return await this.prismaService.recipe.create({
      data: {
        name,
        type,
        imageUrl,
        steps,
        userId,
        ingredients: {
          connect: ingredients,
        },
      },
    });
  }

  async updateRecipe(updateRecipeInput: UpdateRecipeInput): Promise<Recipe> {
    const { id, name, type, imageUrl, steps, ingredients } = updateRecipeInput;
    return await this.prismaService.recipe.update({
      data: {
        name,
        type,
        imageUrl,
        steps,
        ingredients: {
          set: ingredients,
        },
      },
      where: { id },
    });
  }

  async deleteRecipe(id: number): Promise<Recipe> {
    return await this.prismaService.recipe.delete({
      where: { id },
    });
  }
}
