import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  /**
   * This action returns a #${id} ingredient
   * @returns
   */
  async findOne(ingredientWhereUniqueInput: Prisma.IngredientWhereUniqueInput) {
    return this.prisma.ingredient.findUnique({
      where: ingredientWhereUniqueInput,
    });
  }

  /**
   * This action returns many ingredients
   * @returns
   */
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.IngredientWhereUniqueInput;
    where?: Prisma.IngredientWhereInput;
    orderBy?: Prisma.IngredientOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ingredient.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * This action adds a new ingredient
   * @param data
   * @returns
   */
  async create(data: CreateIngredientDto) {
    return this.prisma.ingredient.create({
      data,
    });
  }

  /**
   * This action updates a #${id} ingredient
   * @returns
   */
  async update(params: {
    where: Prisma.IngredientWhereUniqueInput;
    data: UpdateIngredientDto;
  }) {
    const { where, data } = params;
    return this.prisma.ingredient.update({
      data,
      where,
    });
  }

  /**
   * This action removes a #${id} ingredient
   * @returns
   */
  async remove(where: Prisma.IngredientWhereUniqueInput) {
    return this.prisma.ingredient.delete({
      where,
    });
  }
}
