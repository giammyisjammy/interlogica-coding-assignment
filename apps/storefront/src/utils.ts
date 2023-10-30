/**
 * Several little utilities for this project.
 *
 * NOTE: These are NOT generic, and should not be copied
 * to other projects. They're quick imperfect implementations
 * for the known, fixed data we work with here.
 */
import differenceInHours from 'date-fns/differenceInHours';

export function formatPrice(price: number) {
  return `$${Number(price / 100).toFixed(2)}`;
}

export function pluralize(string: string, num: number) {
  return num === 1 ? `1 ${string}` : `${num} ${string}s`;
}

export function isNewDessert(releaseDate: number | Date) {
  return differenceInHours(new Date(), releaseDate) < 3;
}
