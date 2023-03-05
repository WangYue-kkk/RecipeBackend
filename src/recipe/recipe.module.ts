import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RecipeResolver } from './recipe.resolver';
import { RecipeService } from './recipe.service';

@Module({
  imports: [PrismaModule],
  providers: [RecipeResolver, RecipeService],
})
export class RecipeModule {}
