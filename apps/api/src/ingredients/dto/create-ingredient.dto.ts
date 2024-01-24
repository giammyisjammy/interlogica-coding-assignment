/**
 * Using Prisma types saves us the boilerplate of typing our models by hand.
 * However, DTO and interfaces object are kept to automate validation enforcing
 * rules on every route that uses the CreateUserDto.
 * https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services
 *
 */
import { Prisma, MeasureUnit } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateIngredientDto implements Prisma.IngredientCreateInput {
  id?: string | undefined;

  @IsNotEmpty()
  name: string = '';

  @IsEnum(MeasureUnit)
  measureUnit: MeasureUnit = MeasureUnit.unit;

  ProductIngredients?:
    | Prisma.ProductIngredientsCreateNestedManyWithoutIngredientInput
    | undefined;
}
