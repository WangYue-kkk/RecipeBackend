import { Injectable } from '@nestjs/common';
import { Ingredient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientService {
  constructor(private readonly prismaService: PrismaService) {}
  async getIngredients(userId: number): Promise<Ingredient[]> {
    return await this.prismaService.ingredient.findMany({
      where: { userId },
    });
  }
}
