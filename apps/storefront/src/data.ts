/**
 * In a real app, this data would likely live in a database,
 * and be fetched from an API, either at runtime or at
 * compile-time.
 *
 * Keep in mind, this comes from a workshop focused on CSS. In order
 * to make it easy to focus on the styling, I've cut
 * some corners when it comes to data management, and
 * our JavaScript in general. Please don't try to glean
 * any best-practices from stuff like this data file!
 */
export interface Dessert {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice: number | null;
  releaseDate: Date | number;
}

const DESSERTS: Dessert[] = [
  {
    slug: 'chocolate-snack-cake',
    name: 'Chocolate Snack Cake',
    imageSrc: 'https://placehold.co/864x600?text=Chocolate+Snack+Cake',
    price: 1650,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
  },
  {
    slug: 'charred-spiced-pears-with-smoky-vanilla-cherry-sauce',
    name: 'Charred Spiced Pears with Smoky Vanilla-Cherry Sauce',
    imageSrc:
      'https://placehold.co/864x600?text=Charred+Spiced+Pears+with+Smoky+Vanilla-Cherry+Sauce',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    slug: 'pumpkin-cheesecake-cookies',
    name: 'Pumpkin Cheesecake Cookies',
    imageSrc: 'https://placehold.co/864x600?text=Pumpkin+Cheesecake+Cookies',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
  },
  {
    slug: 'nutella-ice-cream',
    name: 'Nutella Ice Cream',
    imageSrc: 'https://placehold.co/864x600?text=Nutella+Ice+Cream',
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
  },
  {
    slug: 'caramel-apple-pie-cookies',
    name: 'Caramel Apple Pie Cookies',
    imageSrc: 'https://placehold.co/864x600?text=Caramel+Apple+Pie+Cookies',
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
  },
  {
    slug: 'french-apple-cake',
    name: 'French Apple Cake',
    imageSrc: 'https://placehold.co/864x600?text=French+Apple+Cake',
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
  },
];

export default DESSERTS;
