import { prisma } from '.';

import type {
  User,
  Ingredient,
  Product,
  ProductIngredients,
  Storefront,
} from '@prisma/client';

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
  // Chocolate Snack Cake
  {
    id: 'eff2e6e6-7bda-43ff-9ded-cb06466c1235',
    name: 'all-purpose flour',
    measureUnit: 'g',
  },
  {
    id: '1ff04898-6a64-4244-a916-d11202902015',
    name: 'white sugar',
    measureUnit: 'g',
  },
  {
    id: '657d28c1-1ccb-4175-8a34-ecf2351210ca',
    name: 'cocoa',
    measureUnit: 'g',
  },
  {
    id: 'ba3bf5a4-5f0f-484c-880e-2d139816f24c',
    name: 'baking powder',
    measureUnit: 'g',
  },
  {
    id: '89783644-efd7-43fc-b67f-d6b9df87c81a',
    name: 'baking soda',
    measureUnit: 'g',
  },
  {
    id: 'f0f78e76-2773-4e67-ab7b-215a7ee7ccd0',
    name: 'salt',
    measureUnit: 'g',
  },
  {
    id: 'f635b566-a9a4-4c04-8e34-6b2e10498d5b',
    name: 'boiling water',
    measureUnit: 'ml',
  },
  {
    id: '9bea9d83-9235-4f13-b88a-b9f6f242a339',
    name: 'butter',
    measureUnit: 'g',
  },
  {
    id: '311f57be-60b2-4256-90eb-2da28c6610a0',
    name: 'large eggs',
    measureUnit: 'unit',
  },
  {
    id: 'af7de6dd-fc9c-4bf4-8cfc-82d936897408',
    name: 'vanilla extract',
    measureUnit: 'ml',
  },
  {
    id: '85591714-1f69-4b44-b57f-947f037b0c5f',
    name: 'chopped nuts',
    measureUnit: 'g',
  },
  {
    id: '21b0d16d-29b2-414d-894f-51a456a72e66',
    name: 'powdered sugar',
    measureUnit: 'g',
  },
  // Charred Spiced Pears with Smoky Vanilla-Cherry Sauce
  {
    id: 'd619f720-ea34-44ba-81b1-a92f59ca3af4',
    name: 'vanilla bean',
    measureUnit: 'unit',
  },
  {
    id: '07d46ef5-3a40-45c4-91c5-603cc9a182d0',
    name: 'brandy',
    measureUnit: 'ml',
  },
  {
    id: '0b1c3c4c-d657-48e7-bfd4-8754ed69011e',
    name: 'frozen tart red cherries',
    measureUnit: 'g',
  },
  {
    id: 'b9c4c1fe-691d-4283-a935-290d51cc2190',
    name: 'packed brown sugar',
    measureUnit: 'g',
  },
  {
    id: '9b27b167-9ca8-4c57-a6f7-08b8eb1028ce',
    name: 'ground ginger',
    measureUnit: 'g',
  },
  {
    id: 'a55ddf89-dce9-4c3c-af40-e160a5608bd3',
    name: 'ground allspice',
    measureUnit: 'g',
  },
  {
    id: 'd45e5dd3-1143-4c73-bde0-9b048c4cab08',
    name: 'freshly ground black pepper',
    measureUnit: 'g',
  },
  {
    id: 'a68733d5-e984-4f9c-a52f-032bfbf09065',
    name: 'salt',
    measureUnit: 'g',
  },
  {
    id: 'da04a950-7f5c-499b-9463-3ef08b297797',
    name: 'water',
    measureUnit: 'ml',
  },
  {
    id: 'ead95469-a25b-4eb7-b005-a2a5d9ef3340',
    name: 'cornstarch',
    measureUnit: 'g',
  },
  {
    id: 'fa8523bb-c8a5-42ed-b31d-3a37a086bad6',
    name: 'ripe pears',
    measureUnit: 'unit',
  },
  // Other ingredients omitted for brevity
] as Array<Ingredient>;

const DEFAULT_PRODUCTS = [
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
] as Array<Product>;

const DEFAULT_PRODUCT_INGREDIENTS = [
  // Chocolate Snack Cake
  {
    ingredientId: '4b4a9b3b-8c1c-4d3c-8f3b-4c0c6b1b1f4f',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  {
    ingredientId: '2c8b5a4b-1a7b-4d8a-8e7b-4c4b4c8b5c9c1',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  {
    ingredientId: '3b3f4b4b-6c5c-4d1b-8f4b-4c6c4b4b3b6f',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  {
    ingredientId: '3b5c8a8b-5e8a-4d1d-8c8a-4b1b4c4b4a6b',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  {
    ingredientId: '2d6b1e6c-1c0a-4d0b-8b8e-4b5c6c0b6c1a0b',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  {
    ingredientId: '4b5c6b2b-4e4e-4d4f-8a6a-4b2b4e6b4b2b',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  {
    ingredientId: '2b4a6b5b-8c6d-4d1a-8d8b-4c0b4e8c6e1a0b',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  {
    ingredientId: '5f6f4b3b-6a5a-4d4f-8b6b-4c6b6e6b4c9c1',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  {
    ingredientId: '6b4c3f3b-8c8c-4d4b-8c3f-4b4c4b4a6b4b',
    productId: 'f6c9b4a1-6e7e-4d3b-8a9a-4b9c4c6b5c2c7',
    quantity: 1,
  },
  // Charred Spiced Pears with Smoky Vanilla-Cherry Sauce

  {
    ingredientId: 'c8b4a5d2-8a7c-4d3a-8b3d-4c0c6c1b0c0b',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  {
    ingredientId: 'f6d3e6e5-86d5-4d4f-8e6e-4b6f6e4c1a0b',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  {
    ingredientId: '4b7f4c8d-6a5a-4d1d-8b8b-4b7a6a4a6e1b',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  {
    ingredientId: '3b4a4d6d-5e8a-4d1b-8c1c-4b1f4d6f4a9e',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  {
    ingredientId: '3a4f3f8d-8c8c-4d4b-8c3f-4b4c4b4a6b4b',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  {
    ingredientId: '4b4b1c6d-41ab-4d8d-8e1b-4c4a6a6e2f4b',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  {
    ingredientId: '2d6a6f8a-7a7c-4d1f-8d9b-4d6a6e1c0a0b',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  {
    ingredientId: '5f9f6b3b-6c3b-4d6b-8b4f-4c6b6e6b9f4b',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  {
    ingredientId: '6b9f6c8a-1e8c-4d6a-8e8e-4a6b6c6e2f4b',
    productId: 'b6d7d9c7-84f0-4d0b-8e8b-4a4c4c6c5c9c1',
    quantity: 1,
  },
  // Pumpkin Cheesecake Cookies
  {
    ingredientId: '4b4b3c1e-42ab-4b8d-8e1b-4a4e6a6e2f4b',
    productId: 'b21c2c81-610d-4b19-9e1c-4c8c4b8b5b42',
    quantity: 1,
  },
  {
    ingredientId: '7a2a4c3b-6d3e-4b4a-8f4a-4c6b4b4d3b6d',
    productId: 'b21c2c81-610d-4b19-9e1c-4c8c4b8b5b42',
    quantity: 1,
  },
  {
    ingredientId: '4f1e4c6b-5e8b-4c1c-8b8f-4b6b4e4f9e2a',
    productId: 'b21c2c81-610d-4b19-9e1c-4c8c4b8b5b42',
    quantity: 1,
  },
  {
    ingredientId: '4f6b4c9b-6b2c-4b1a-8b8e-4c6b4b5b4c5b',
    productId: 'b21c2c81-610d-4b19-9e1c-4c8c4b8b5b42',
    quantity: 1,
  },
  {
    ingredientId: '4c6f8b7b-2e6f-4b1c-8b7a-4c3b4b3b6b6c',
    productId: 'b21c2c81-610d-4b19-9e1c-4c8c4b8b5b42',
    quantity: 1,
  },
  // Nutella Ice Cream
  {
    ingredientId: 'e88a0d6e-895b-4f2a-8a7a-4e8c0e9d9d94',
    productId: 'bf0bde5d-e02a-41bb-8aa1-31215f476dda',
    quantity: 1,
  },
  {
    ingredientId: '2e9edf6d-1e8a-4f2b-8b2b-4e28a9a9e44d',
    productId: 'bf0bde5d-e02a-41bb-8aa1-31215f476dda',
    quantity: 1,
  },
  {
    ingredientId: '36a3d52b-39d0-43bd-8b3c-4e99e0e9e4fb',
    productId: 'bf0bde5d-e02a-41bb-8aa1-31215f476dda',
    quantity: 1,
  },
  {
    ingredientId: '1f7bb1de-2e6c-4f1d-8b8f-4e6e9f9e0c2d',
    productId: 'bf0bde5d-e02a-41bb-8aa1-31215f476dda',
    quantity: 1,
  },
  {
    ingredientId: '2a9b4f18-2a8b-4f4d-8b9b-4a0b69e2f4b8',
    productId: 'bf0bde5d-e02a-41bb-8aa1-31215f476dda',
    quantity: 1,
  },
  // Caramel Apple Pie Cookies
  {
    ingredientId: 'a6ed4d72-44ab-41c8-8b5d-4b9c9b6b69e6',
    productId: 'a07d1f14-8ed6-4b1d-9e7f-4c6b4c6c7c26',
    quantity: 1,
  },
  {
    ingredientId: 'b4d92bd9-1e95-42c8-8d1f-4b4e4a6b5b4c',
    productId: 'a07d1f14-8ed6-4b1d-9e7f-4c6b4c6c7c26',
    quantity: 1,
  },
  {
    ingredientId: 'd26a7f84-6a5a-4b1f-9e8b-4a6b4a6c1a0b',
    productId: 'a07d1f14-8ed6-4b1d-9e7f-4c6b4c6c7c26',
    quantity: 1,
  },
  {
    ingredientId: 'b2dbd2a7-6c2d-4f1d-8a1f-4a2a6b4a6b0b',
    productId: 'a07d1f14-8ed6-4b1d-9e7f-4c6b4c6c7c26',
    quantity: 1,
  },
  {
    ingredientId: 'c76c7c79-3f8f-4b4c-8b4f-4c6b6b8f4b3f',
    productId: 'a07d1f14-8ed6-4b1d-9e7f-4c6b4c6c7c26',
    quantity: 1,
  },
  // French Apple Cake
  {
    ingredientId: '3aa55e6e-35b0-4056-96d3-4b87c0e99c99',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 3,
  },
  {
    ingredientId: '2264bcc9-2f1e-4378-8387-c3bcbb064326',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 1,
  },
  {
    ingredientId: 'f5aa8d18-9821-46ac-9a8a-4ef4992a9b48',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 2,
  },
  {
    ingredientId: '2a81c62d-2e86-49bd-b2c0-4e9766961c8f',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 1,
  },
  {
    ingredientId: 'f6a7dc46-9e93-41ed-9247-4ea5a52a9c84',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 1,
  },
  {
    ingredientId: 'a192d92c-d7ec-4f1a-88a9-4b6b99b2f62b',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 1,
  },
  {
    ingredientId: '8a6a94d7-695b-4a19-81c0-4bb8b8f4b6e6',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 2,
  },
  {
    ingredientId: 'd3a1e64b-9d62-42dc-9e8b-4c52bc6b9629',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 1,
  },
  {
    ingredientId: 'fba7f7dc-df1e-43e4-9da7-4cb4ba8a9b4b',
    productId: 'f887bfa0-e66b-4ef9-9ce5-35a150b723b2',
    quantity: 1,
  },
] as Array<ProductIngredients>;

const DEFAULT_STOREFRONT = [
  {
    id: 'a7727d2e-600a-4330-bcbb-852c87d2df56',
    productId: '1f3af6ab-7307-483e-9de6-3302da110f38',
    quantity: 200,
    status: 'fresh',
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
] as Array<Storefront>;

(async () => {
  try {
    console.log('Ingredients...');
    await Promise.all(
      DEFAULT_INGREDIENTS.map((ingredient) =>
        prisma.ingredient.upsert({
          where: {
            id: ingredient.id!,
          },
          update: {
            ...ingredient,
          },
          create: {
            ...ingredient,
          },
        })
      )
    );
    console.log('Products...');
    await Promise.all(
      DEFAULT_PRODUCTS.map((product) => {
        // Tells Prisma client to connect the ingredient to the recipe. If the
        // ingredient doesn't exists yet, we want to create it before linking.
        // The extra variable is to avoid writing the query twice.
        const connectOrCreate = DEFAULT_PRODUCT_INGREDIENTS.filter(
          (x) => x.productId === product.id
        ).map(({ ingredientId, productId, quantity }) => ({
          create: { ingredientId, quantity },
          where: {
            ingredientId_productId: { ingredientId, productId },
          },
        }));

        return prisma.product.upsert({
          where: {
            id: product.id!,
          },
          update: {
            ...product,
            ProductIngredients: { connectOrCreate },
          },
          create: {
            ...product,
            ProductIngredients: { connectOrCreate },
          },
        });
      })
    );
    console.log('Storefront...');
    await Promise.all(
      DEFAULT_STOREFRONT.map((entry) =>
        prisma.storefront.upsert({
          where: {
            id: entry.id!,
          },
          update: {
            ...entry,
          },
          create: {
            ...entry,
          },
        })
      )
    );
    console.log('Users...');
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
