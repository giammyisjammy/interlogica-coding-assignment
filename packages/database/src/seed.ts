import { prisma } from '.';

import type { User, Ingredient } from '@prisma/client';

const DEFAULT_USERS = [
  {
    id: '98e8ad1f-ed16-4e9f-9f0c-8299b2c735e4',
    username: 'Americo',
    passwordHash: 'EEYe9cMLDAHr57o',
  },
  {
    id: '6231c3cf-d7f8-4f8a-ba5e-2716d9b885e6',
    username: 'Adolph',
    passwordHash: 'Qc2WSvleeVVE_1Q',
  },
] as Array<User>;

const DEFAULT_INGREDIENTS = [
  {
    id: 'd1554a74-f6c1-450e-88fc-73c13a1bad4e',
    name: 'Refrigerated ready-to-bake sugar cookies dough',
    measureUnit: 'g',
  },
  {
    id: 'e8a55ff1-111e-4a80-bf23-8b498e76a9a0',
    name: 'Philadelphia No Bake Cheesecake filling',
    measureUnit: 'g',
  },
  {
    id: '16337376-6965-4446-aa83-a805a6947b35',
    name: 'Halloween themed toppings',
    measureUnit: 'g',
  },
  {
    id: 'c680c6ff-6e8e-4fe2-ad4d-d76e161dc887',
    name: 'Colorful icing',
    measureUnit: 'g',
  },
  {
    id: '085aa2d5-4414-416e-8979-83668b7d21fa',
    name: 'Colorful sprinkles',
    measureUnit: 'g',
  },
  {
    id: '0b8fdf07-74ac-4c80-ab6f-7c1688d68492',
    name: 'All-purpose flour',
    measureUnit: 'g',
  },
  {
    id: 'de339614-67b4-4d9f-94a9-4e67becac951',
    name: 'White sugar',
    measureUnit: 'g',
  },
  {
    id: '17e69021-67f5-496a-a1a3-5a0f9da6612d',
    name: 'Cocoa',
    measureUnit: 'g',
  },
  {
    id: '605e31ee-916e-4a8b-be13-55111a8730ab',
    name: 'Baking powder',
    measureUnit: 'g',
  },
  {
    id: '2a692633-cbab-4db6-a971-c3c699645ce5',
    name: 'Baking soda',
    measureUnit: 'g',
  },
  {
    id: '4679f79c-52bf-4e9e-ba6c-0076090e0f13',
    name: 'Salt',
    measureUnit: 'g',
  },
  {
    id: '0677ba61-1536-4ac0-9bf1-8119cdc2b18a',
    name: 'Boiling water',
    measureUnit: 'ml',
  },
  {
    id: 'cc9d77a0-a2b6-46fe-b102-3ebd39c7b96b',
    name: 'Butter',
    measureUnit: 'g',
  },
  {
    id: '4fff7667-abbe-493c-91c9-2cbff41cd1e7',
    name: 'Eggs',
    measureUnit: 'g',
  },
  {
    id: '2264bcc9-2f1e-4378-8387-c3bcbb064326',
    name: 'Vanilla extract',
    measureUnit: 'ml',
  },
  {
    id: 'a4339fce-3ed1-4901-baeb-70ab3a260c28',
    name: 'Vanilla bean',
    measureUnit: 'g',
  },
  {
    id: '1bcaecb5-05a3-49ab-aae0-ce73f156f86f',
    name: 'Brandy',
    measureUnit: 'g',
  },
  {
    id: '950d51b8-1f0f-4109-b8eb-aa0ad313939e',
    name: 'Frozen tart red cherries',
    measureUnit: 'g',
  },
] as Array<Partial<Ingredient>>;

const DEFAULT_PRODUCTS = [
  {
    id: 'e84b6c91-c1c3-4a97-8778-ca9a0bf89af7',
    name: 'Halloween Mini Cheesecake',
    price: 0,
    quantity: 0,
  },
  {
    id: '1f3af6ab-7307-483e-9de6-3302da110f38',
    name: 'Chocolate Snack Cake',
    price: 0,
    quantity: 0,
  },
  {
    id: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    name: 'Charred Spiced Pears with Smoky Vanilla-Cherry Sauce',
    price: 0,
    quantity: 0,
  },
  {
    id: 'a75e0c70-617f-4543-b0e6-ce7745199fe8',
    name: 'Pumpkin Cheesecake Cookies',
    price: 0,
    quantity: 0,
  },
  {
    id: 'f6c5c052-0196-42be-b5b5-8e9a755e34db',
    name: 'Nutella Ice Cream',
    price: 0,
    quantity: 0,
  },
  {
    id: 'b0b535f6-e003-45cb-8db0-80c3c05ac1a0',
    name: 'Caramel Apple Pie Cookies',
    price: 0,
    quantity: 0,
  },
  {
    id: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    name: 'French Apple Cake',
    price: 0,
    quantity: 0,
  },
];

const DEFAULT_PRODUCT_INGREDIENTS = [
  {
    ingredientId: 'd1554a74-f6c1-450e-88fc-73c13a1bad4e',
    productId: 'e84b6c91-c1c3-4a97-8778-ca9a0bf89af7',
    quantity: 1,
  },
  {
    ingredientId: 'e8a55ff1-111e-4a80-bf23-8b498e76a9a0',
    productId: 'e84b6c91-c1c3-4a97-8778-ca9a0bf89af7',
    quantity: 1,
  },
  {
    ingredientId: '16337376-6965-4446-aa83-a805a6947b35',
    productId: 'e84b6c91-c1c3-4a97-8778-ca9a0bf89af7',
    quantity: 1,
  },
  {
    ingredientId: 'c680c6ff-6e8e-4fe2-ad4d-d76e161dc887',
    productId: 'e84b6c91-c1c3-4a97-8778-ca9a0bf89af7',
    quantity: 1,
  },
  {
    ingredientId: '085aa2d5-4414-416e-8979-83668b7d21fa',
    productId: 'e84b6c91-c1c3-4a97-8778-ca9a0bf89af7',
    quantity: 1,
  },
  {
    ingredientId: '0b8fdf07-74ac-4c80-ab6f-7c1688d68492',
    productId: '1f3af6ab-7307-483e-9de6-3302da110f38',
    quantity: 1,
  },
  {
    ingredientId: 'de339614-67b4-4d9f-94a9-4e67becac951',
    productId: '1f3af6ab-7307-483e-9de6-3302da110f38',
    quantity: 1,
  },
  {
    ingredientId: '17e69021-67f5-496a-a1a3-5a0f9da6612d',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 1,
  },
  {
    ingredientId: '605e31ee-916e-4a8b-be13-55111a8730ab',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 1,
  },
  {
    ingredientId: '2a692633-cbab-4db6-a971-c3c699645ce5',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 1,
  },
  {
    ingredientId: '4679f79c-52bf-4e9e-ba6c-0076090e0f13',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 1,
  },
  {
    ingredientId: '0677ba61-1536-4ac0-9bf1-8119cdc2b18a',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 1,
  },
  {
    ingredientId: 'cc9d77a0-a2b6-46fe-b102-3ebd39c7b96b',
    productId: '1f3af6ab-7307-483e-9de6-3302da110f38',
    quantity: 1,
  },
  {
    ingredientId: '4fff7667-abbe-493c-91c9-2cbff41cd1e7',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 1,
  },
  {
    ingredientId: '2264bcc9-2f1e-4378-8387-c3bcbb064326',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 1,
  },
];

const DEFAULT_STOREFRONT = [
  {
    id: 'a7727d2e-600a-4330-bcbb-852c87d2df56',
    productId: 'e84b6c91-c1c3-4a97-8778-ca9a0bf89af7',
    quantity: 200,
    status: 'rotten',
    created_at: new Date('2023-10-29T23:00:00.000Z'),
  },
  {
    id: '8af0b9dc-40e0-45b1-b4b7-363a88677e8a',
    productId: '1f3af6ab-7307-483e-9de6-3302da110f38',
    quantity: 246,
    status: 'stale',
    created_at: new Date('2023-10-29T23:00:00.000Z'),
  },
  {
    id: '9eceda32-9ec2-4e16-9dd4-f1b9ae779cab',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 85,
    status: 'rotten',
    created_at: new Date('2023-10-29T23:00:00.000Z'),
  },
  {
    id: 'fe9ee977-098e-4d20-a955-a30d46865756',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 169,
    status: 'rotten',
    created_at: new Date('2023-10-29T23:00:00.000Z'),
  },
  {
    id: '7513f07f-642a-4188-a6ea-6d847595d0f8',
    productId: 'a3add4b5-08db-40b2-970b-8a8e96d090cd',
    quantity: 108,
    status: 'rotten',
    created_at: new Date('2023-10-29T23:00:00.000Z'),
  },
  {
    id: 'df9be5c5-73aa-4f01-9fd8-0149740fed7e',
    productId: '1f3af6ab-7307-483e-9de6-3302da110f38',
    quantity: 161,
    status: 'rotten',
    created_at: new Date('2023-10-29T23:00:00.000Z'),
  },
] as Array<Partial<Storefront>>;

(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.upsert({
          where: {
            id: user.id!,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
