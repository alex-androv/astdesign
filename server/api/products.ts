import { defineEventHandler } from "h3";
import { generateFakeProduct } from "~/utils/generate";
import type { Product } from "~/types/product";

let cachedProducts: Product[] | null = null;

export default defineEventHandler((event) => {
  if (cachedProducts) {
    return cachedProducts;
  }

  const products: Product[] = Array(12)
    .fill(null)
    .map(() => generateFakeProduct());

  cachedProducts = products;

  return products;
});
