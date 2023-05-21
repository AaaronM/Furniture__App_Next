import { data } from "@/app/data/data"

export const findFurnitureBySlug = (slug) => {
  const furnitureFound = data.find((furniture) => {
    return furniture.slug.toString().trim() === slug.toString().trim();
  });

  return furnitureFound;
}

export const findFurnitureProduct = (slug, product) => {
  const furnitureFound = findFurnitureBySlug(slug);
  const furnitureProductFound = furnitureFound.category.find((p) => {
    return p.slug.toString().trim() === product.toString().trim();
  });

  return furnitureProductFound;
}

