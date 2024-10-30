import { CategoryTyPe } from "@/types/commonTypes";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../dataApi/commonApi";

export const API_QUERY_KEYS = {
  headerCategories: "header/categories",
  mainRecommendedBooks: "main/carousel/recommended",
  mainNewBooks: "main/carousel/newBooks",
  mainBestBooks: "main/carousel/bestBooks",
};

export const useCategoryData = (selectedCategory: string) => {
  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useQuery<CategoryTyPe[]>({
    queryKey: [API_QUERY_KEYS.headerCategories, selectedCategory],
    queryFn: () => getCategories(selectedCategory),
  });

  return {
    categoryData,
    isCategoryLoading,
    isCategoryError,
  };
};
