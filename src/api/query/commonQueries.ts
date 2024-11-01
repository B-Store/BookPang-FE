import { useQuery } from "@tanstack/react-query";
import { getCategories, getNewSpecialBooks } from "../dataApi/commonApi";
import { CategoryTyPes, NewSpecialBookTypes } from "@/types/bookTypes";

const API_QUERY_KEYS = {
  categories: "header/toggleMenu",
  categoryNewSpecialBooks: "header/toggleMenu/newSpecialBooks",
};

export const useCategoryData = (selectedCategory: string) => {
  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useQuery<CategoryTyPes[]>({
    queryKey: [API_QUERY_KEYS.categories, selectedCategory],
    queryFn: () => getCategories(selectedCategory),
  });

  const {
    data: newSpecialData,
    isLoading: isNewSpecialLoading,
    isError: isNewSpecialError,
  } = useQuery<NewSpecialBookTypes[]>({
    queryKey: [API_QUERY_KEYS.categoryNewSpecialBooks],
    queryFn: () => getNewSpecialBooks(),
  });

  return {
    categoryData,
    newSpecialData,
    isCategoryLoading,
    isNewSpecialLoading,
    isCategoryError,
    isNewSpecialError,
  };
};
