import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { IngredientResolver } from './ingredient.resolver';
import { IngredientService } from './ingredient.service';

@Module({
  imports: [PrismaModule],
  providers: [IngredientResolver, IngredientService],
})
export class IngredientModule {}
