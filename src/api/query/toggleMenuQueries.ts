import { useQuery } from "@tanstack/react-query";
import { getCategories, getNewSpecialBooks } from "../dataApi/toggleMenuApi";
import { CategoryTyPes, NewSpecialBookTypes } from "@/types/toggleMenuTypes";

const TOGGLE_MENU_QUERY_KEYS = {
  categories: "nav/toggleMenu",
  categoryNewSpecialBooks: "nav/toggleMenu/newSpecialBooks",
};

export const useCategoryData = (selectedCategory: string) => {
  const {
    data: categoryData,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useQuery<CategoryTyPes[]>({
    queryKey: [TOGGLE_MENU_QUERY_KEYS.categories, selectedCategory],
    queryFn: () => getCategories(selectedCategory),
  });

  const {
    data: newSpecialData,
    isLoading: isNewSpecialLoading,
    isError: isNewSpecialError,
  } = useQuery<NewSpecialBookTypes[]>({
    queryKey: [TOGGLE_MENU_QUERY_KEYS.categoryNewSpecialBooks],
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
